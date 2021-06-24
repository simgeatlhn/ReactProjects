import { createContext, useEffect, useState } from "react"; //Context Api kullanmak için createContext import edilmeli
import { v4 as uuidv4 } from 'uuid'; //dinamik id üretimi

export const EmployeeContext = createContext(); //ilk olarak createContext çalıştırılmalı

//context oluşturulduktan sonra provider oluşturulur
//provider içerisine children ile paylaşılmak istenilen veri yazılır
const EmployeeContextProvider = (props) => {  //burdaki veriyi EmployeeList.js ye provider ile göndeririz

    //useState
    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
        { id: uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
        { id: uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
        { id: uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097' }
    ])

    //LOCALSTORAGE
    //localStorage da olan bilgileri almak için ayrı bir useEffect yazarız
    //JSON.parse ile aldığı veriyi objeye çevirir
    // sadece  ilk render da çalışması için [] eklenir
    useEffect(() => {
        const employees = localStorage.getItem('employees')
        setEmployees(JSON.parse(employees))
    }, [])

    //useEffect ilk çalıştığında setItem ile employees daki bilgler localStorage a gönderiliyor
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))
    })


    //alfabetik sıralama -employees yerine sortedEmployees kullanılır bu yüzden
    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));

    //item eklemek için addEmployee fonksiyonu oluşturulur
    //addEmployee fonksiyonuna 4 parametre alırız. id yi almayız uuidv4 kullanılır.
    //addEmployee fonksiyonunu provider içerisinde de tekrar kullanmalıyız
    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }])
    }

    //Employee Delete fonksiyonu
    //id bilgisine göre silinir
    //deleteEmployee fonksiyonu provider içine eklenir farklı componentlardan çağırıldığında kullanabilmek için
    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    //editEmployee
    //updatedEmployee , güncellenmiş veriler
    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id == id ? updatedEmployee : employee)))
    }

    return (

        //Context api yi children lara göndermek için {props.children} kullanılır
        //children - EmployeeList.js
        //*** children ile  paylaşılacak value employess
        //employess ile veriler diğer child larda kullanılabilir
        <EmployeeContext.Provider value={{ sortedEmployees, employees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>

    )
}

export default EmployeeContextProvider;