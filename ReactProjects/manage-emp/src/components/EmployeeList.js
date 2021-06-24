import { useState, useContext, useEffect } from 'react' //state objesi oluşturmak yerine useState hook u kullanılır. hook js fonksiyonu. useState , state yerine eldeki veriyi gösterecek
import Employee from './Employee';
import { Button, Modal, Alert } from 'react-bootstrap'; //Modal iöport etmeyi unutma!!
import { EmployeeContext } from '../contexts/EmployeeContext';
import AddForm from './AddForm';
import Pagination from './Pagination';
//import { useReducer } from 'react';

const EmployeeList = () => {

    const { sortedEmployees } = useContext(EmployeeContext) //useContext parametre olarak context in kendisini alır

    //useState array döner. bu yüzden const[] yazılır. 
    //iki parametreli array döner employees çalışan bilgileri , setEmployees alışan bilgilerinin güncelleneceği parametre 

    // const [employees, setEmployees] = useState([
    //     { id: 1, name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
    //     { id: 2, name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
    //     { id: 3, name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
    //     { id: 4, name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
    //     { id: 5, name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097' }
    // ])

    //useState , EmployeeContext de kullanılacak

    const [show, setShow] = useState(false) //true olursa Modal gösterilir- onCLick ile true yapılacak- bunun için handleClose ve handleShow fonksiyonları kullanılacak
    //showAlert in ilk durumu false
    const [showAlert, setShowAlert] = useState(false); //Alert mesaj gösterimi için state oluşturduk
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(5); //her sayfada olacak employee sayısı 5


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Alert
    //showAlert başlangıçtaki durum setShowAlert değişikliklerdeki durum
    //const handleShowAlert = () => setShowAlert(true);
    //Alert in bir süre sonra kapanması için setTimeout methodunu kullanırız
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    //form modal açılıp yeni eleman eklendikten sonra modal ın otomatik kapanması için kullanırız
    useEffect(() => {
        handleClose();
        //handleClose dan sonra call-back fonksiyonu return
        return () => {
            handleShowAlert(); //employee eklendiğinde success mesajı return edilir
        }
    }, [sortedEmployees])

    // //useRef - sayesinde component kendini tekrar render etmez
    // const myRef = useRef(null); //başlangıç  değeri null
    // const onButtonClick = () => {
    //     myRef.current.focus();
    // }

    //PAGINATION
    //currentEmployees o an sayfada çalışan sayısı , sortedEmployees tüm çalışan sayısı
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);


    // //**useReducer HOOK
    // //dispatch  yani haberci hangi foksiyonu çalıştıracağımzı gösterir

    // //reducer yapılması istenilen işlmeler -artır, azalt, hata
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'increment':
    //             return { count: state.count + 1 }
    //         case 'decrement':
    //             return { count: state.count - 1 }
    //         default:
    //             throw new Error();
    //     }
    // }
    // const initialState = { count: 0 }; //başlangıç durumu 0
    // const [state, dispatch] = useReducer(reducer, initialState) //state güncel durum, dispatch hangi işlemin yapılacağını gösteren durum

    //** <Modal.Body> içerisine AddForm Componentini yerleştirdik
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>


            <Alert show={showAlert} variant="success">Employee List successfully updated !!</Alert>


            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        //1.YÖNTEM
                        //.sort((a,b)=>a.name.localeCompare(b.name)) ile yeni eklenenler alfabetik olarak sıralanır
                        //2.YÖNTEM
                        //.sort((a,b)=>(a.name < b.name ? -1 : 1))
                        //3.YÖNTEM
                        //sortedEmployee oluştur EmployeeContext.js de
                        currentEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Pagination
                pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees={currentEmployees}
                sortedEmployees={sortedEmployees}
            />

            {/* //useReducer */}
            {/* Count:{state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button> */}


            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddForm />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
                </Modal.Footer>
            </Modal>

            {/* useref de myRef referance ı ile ilişkilendirme */}
            {/* <input ref={myRef} type="text"></input>
            <button onClick={onButtonClick}>Focus Input</button> */}

        </>
    )


}

export default EmployeeList;

//App.js > EmployeeList.js > Employee.js (parent > child)