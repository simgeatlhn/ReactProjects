import React from "react";

export const ThemeContext = React.createContext(); //ThemeContext iletilmek istenilen veriler için kullanılacak //create ile BookContext oluşturulur

class ThemeContextProvider extends React.Component {

    state = {
        isDarkTheme: true,
        dark: { bg: '#222529', txt: '#D65F5f', hover: 'rgba(231,76,60,0.8)' },
        light: { bg: '#F8F9FA', txt: '#222529', hover: 'rgba(254,209,54,0.8)' }
    }



    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme })
    }

    render() {

        // {...this.state} state nesnesinin kopyasını alıyoruz
        //veriyi contextin(BookContext)  provider ı ile göndeririz <BookContext.Provider> value ile
        return (
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                {this.props.children}
            </ThemeContext.Provider>

        )
    }
}


export default ThemeContextProvider;

//ThemeContext i hem BookList.js de hem Book.js de kullandık