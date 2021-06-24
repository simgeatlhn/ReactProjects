import React from 'react';
import BookList from './BookList';
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from '../contexts/ThemeContext';

class App extends React.Component {


    render() {
        //tüm kitap verilerini bookList e aktardık
        return (
            //BookList,BookContextProvider  tarafından kapsanmalı(parent-child)
            <div>
                <ThemeContextProvider>
                    <BookContextProvider>
                        <BookList />
                    </BookContextProvider>
                </ThemeContextProvider>
            </div>
        );
    }
}

export default App;