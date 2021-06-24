// ilk constructor --> state initialization
// render metodu ilk defa calisti
// onClick eventi çalıştı
// setState state nesnesini guncelledi --> triggered render
// render metodu guncel JSX i sayfada gosteriyor

import React from "react";

class Collapse extends React.Component {

    // constructor() {
    //     super(); //super(); ile React.Component dan constructor ın tüm özelliklerini dahil ederiz

    //     this.state = {
    //         showContent: true
    //     }
    // }

    state = { showContent: true } //kısa tanımlaması - constructor sız

    //render ve constructor tanımlı React.Component den gelir
    //Ama showMore methodunu biz tanımlarız

    showMore = () => {
        this.setState({ showContent: !this.state.showContent }) // !this.state.showContent false ise true , true ise false yapar
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {/* {this.props.children.props.cardTitle} uzun */}
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </button>
                {
                    //ternary operator
                    this.state.showContent ? (
                        <div className="collapse show" id={this.props.href}>
                            {/* {this.props.children} */}
                            {React.Children.map(this.props.children, children => children)}
                        </div>
                    ) : null
                }
            </div>
        );
    }
}



export default Collapse;

