import React,{ Component} from 'react'
import Service from './Service'
import escapeRegExp from 'escape-string-regexp'



class Services extends Component {
    state = {
        query : "",
    services : [],
    }

    fixData = (maddObj) => {
        let lis1=[]
        for (var e in maddObj){
            if (maddObj.hasOwnProperty){
                        lis1=[...lis1,maddObj[e]]
                }
            }  
    }
    componentDidMount(){
            
        fetch(`https://what-i-do-34510.firebaseio.com/ecards.json`)
        .then(response => response.json())
        .then(data =>{
            let lis1=[]
            for (var e in data){
                if (data.hasOwnProperty){
                            lis1=[...lis1,data[e]]
                    }
                } 
            this.setState({services : lis1})

        } )
     }
    updateQuery = (query) => {
        this.setState({ query: query.trim()})
    }  

    render(){
        
        let showService
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showService = this.state.services.filter((service) => match.test(service.service) || match.test(service.location) ||  match.test(service.title))
        }else{
            showService = this.state.services
        }

        return (
        <React.Fragment>
        <div className=' container'>
            <h2 className="text-center pt-4 text-primary"> Services</h2>
             <div className=''>
            <h6 className='text-center text-primary mt-5'>Search for a Service.</h6>
            <form  onSubmit={e => e.preventDefault()} className='form-group mt-2 d-flex flex-column sixty'>
                <div className='d-flex my-2'>
                <input value={this.state.query} className='form-control col-md-12 bg-light text-dark input-group-prepend' type='text' name='serv' placeholder='Search for service' onChange={e => this.updateQuery(e.target.value)}/>

                </div>

            </form>
           </div>
           <div className='container'>
           
               <div className='row wrap'>
        {console.log((showService))}
               {
                showService.map((item,i) => {
                    return (
                        <div className='col-lg-4 col-md-6 col-sm-12 py-1 ' key={item.id}>
                           <Service
                            key={item.id}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            pic={item.pic}
                            title={item.title}
                            service={item.service}
                            phone={item.phone}
                            email={item.email}
                            location={item.location}
                            price={item.price}
                            />
                              </div>
                    );
                })
            }
                </div>
             
        </div>
        </div>
    </React.Fragment>
    )
    }
}



export default  Services;

    // darr = []

    // objToarr = (obj) => {
    //     for (let key in obj){
    //         if (obj.hasOwnProperty(key)){
    //             console.log(obj[key])
    //             this.darr += obj[key]
    //             console.log(this.darr)
    //         }
    //     }

    // }