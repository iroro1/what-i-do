import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Showcase from './Showcase'
import Service from './Service'
import { Helmet } from 'react-helmet'

export default class Home extends Component {
    state = {
        promo:[],
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
            this.setState({promo : lis1})
            }
         )
    }
    

        render() {
            const { promo } = this.state;
          
            let promoList = []
            for(var e in promo){
                if(promo[e].promo === true){
                    promoList = [...promoList, promo[e]]
                }
            }
        return (
            <div>
                <Showcase/>
                <h2 className="text-center pt-4 text-primary"> Services</h2>
            <div className='text-center'>
                <i className='fas fa-star fa-2x text-warning mx-2'></i>
                <b className='text-center text-danger lead '>Promoted e-cards</b>.<small className='text-danger ml-3'>Let people find you quickly by featuring a special ad that requires no scrolling down the long list. Send a Mail to get featured. View all <Link to='/services' className='nav-link text-red'><i className="fas fa-book mr-2"></i>Service E-Cards</Link> .</small>
                
            </div>
                <div className='container'>
           <div className='row '>

           {

            promoList.map((item,i) => {
                return (
                    <div className='col-lg-4 col-md-6 col-sm-12 py-1 ' key={item.id}>
                    <Helmet>
                        <title>What-I-Do | Home page</title>
                        <meta name='description' content="What-I-Do Home Page." />
                        <meta name='keywords' content="Services, E-cards, Trnc, kktc, cakes in cyprus, free ads cyprus, put up freee ads" />
                    </Helmet>
                       <Service
                            key={item.id}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            title={item.title}
                            service={item.service}
                            phone={item.phone}
                            email={item.email}
                            location={item.location}
                            insta={item.insta}
                            twt={item.twt}
                            link={item.link}
                            />
                          </div>
                );
            })
            }
            </div>
            </div>
            </div>
        )
    }
}
