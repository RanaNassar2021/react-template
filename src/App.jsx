import React, {Component} from "react";
import GridExample from "./card";
import Header from "./nav";
import Testimonial from "./cardTest";
import GroupExample from "./boxcard";
import { Button } from "react-bootstrap";
import Footer from './Footer';

class App extends Component {
    render(){
        return(
            <div className="app">
              <div className="s1">
                 <Header/>
                  <GridExample/>
                </div>
            <div className="s2"><h3>some random information </h3>
              <p className="p1">in this section we are going to talk about services we provide in this awesome website <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium, dolor eu semper
               ultricies, mauris velit dictum nunc, non pellentesque quam ante non justo. Maecenas et purus 
               sit amet neque iaculis tristique at sed risus. Aliquam erat volutpat. Vivamus scelerisque, turpis
                ac venenatis imperdiet, turpis risus convallis neque, sit amet feugiat quam purus eu libero. Proin 
                et tellus ullamcorper nisi consectetur egestas vel pretium arcu. Nunc bibendum eu diam quis viverra.
                 Sed feugiat lorem non augue rhoncus sodales. Vivamus non libero vehicula, bibendum sapien in, aliquam 
                 orci. Vestibulum id dolor a elit facilisis posuere ut sed est. Quisque justo tellus, iaculis non sapien ut,
                  dignissim bibendum dui. Nunc at accumsan ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                   posuere cubilia curae; Integer sed gravida ligula, vitae commodo orci.
              </p>
              <GroupExample/>
            </div>
            <div >
              <Testimonial/>
            </div>
            
                <div className="text-start m-5 bg-dark text-white p-4">
                    <h4> call to action! it's time!</h4>
                    <p>
                        sign up for our product by clicking that button 
                        right over there
                    </p>
                
                    <Button>sign up</Button>

                   </div>


                     <div>

                <Footer/>

                </div>

            </div>
            
                   
             

             



            
        )
    }
}

export default App;
 