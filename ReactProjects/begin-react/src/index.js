//react ın çalışmaya başladığı dosya olarak düşünebiliriz.

//react modulünü çağırıp React değişkenine veriyoruz 
import React from 'react';
import ReactDOM from "react-dom";
import Card from "./components/Card"; //Component i index.js de import etmeliyiz
import Collapse from "./components/Collapse";

//**DERS-5

//component: bir fonksiyon ya da  class dan oluşan js kodları
//component:web sayfalarındaki her parça olarak düşünülebilir
// function
// function App() {
//     return <h1> hi! </h1>;

// }

// class
// class App2 extends React.Component {
//     render() {
//         return <h1> hello </h1>;
//     }
// }

// component i sayfamızda göstermek için render etmeliyiz

// function 
// ReactDOM.render( 
//     <App/> , //App fonksiyonunu parametre olarak alırız
//     document.querySelector('#root') //App componenti index.html de gösteririz
// );

// class
// ReactDOM.render( 
//     <App2/> ,
//     document.querySelector('#root')
// );

//**DERS-6
//**JSX
// <button type="button" style="padding:'10px', color:'white',backgroundColor:'red', border:'2px solid yellow">HTML Button</button>

// function App(){
//     const str1="Click";
//     const str2="Me";

//     return(
//         <div>
//             <button type="button" style="{{padding:'10px', color:'white',backgroundColor:'red', border:'2px solid yellow'}}">{str1.concat(str2)}</button>
//         </div>
//     );
// }
// ReactDOM.render(
//     <App/>,
//     document.getElementById("root")
// );

// Rendering Elements
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello world!</h1>
//             <h2>It is time {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
//setInterval(tick, 1000);



//**DERS-7-Props
//DERS-8

const App = () => {

    //Collapse parent , Card child
    return (
        <div className="container">

            <div className="row">

                <div className="card-group w-100">

                    <div className="col">

                        <Collapse href="collapseExample1">
                            <Card
                                cardText="Lorem Ipsum Text I"
                                updatedTime="Last Updated 1 min ago"
                                image="https://picsum.photos/id/1/200/300"
                            />
                        </Collapse>

                    </div>

                    <div className="col">

                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="TEST TITLEX2"
                                cardText="Lorem Ipsum Text II"
                                updatedTime="Last Updated 2 min ago"
                                image="https://picsum.photos/id/2/200/300"
                            />
                        </Collapse>

                    </div>

                    <div className="col">

                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="TEST TITLEX"
                                cardText="Lorem Ipsum Text III"
                                updatedTime="Last Updated 3 min ago"
                                image="https://picsum.photos/id/3/200/300"
                            />
                        </Collapse>

                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);