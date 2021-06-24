import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react"; //Context i kullanmak için useContext hook unu import ederiz

const AddForm = () => {


    // item eklemek 1.YÖNTEM-her bir form elemanını ayrı state olarak aldık
    const { addEmployee } = useContext(EmployeeContext) //EmployeeContext den addEmployee fonksiyonunu aldık

    // her bir form elemanınını ayrı bir state olarak kullanabiliriz. çünkü her bir değer girildiğinde state i değişir
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [phone, setPhone] = useState(""); //useSatate boş değer yerine setName(e.target.value) dan gelen değer atanır

    //item eklemek 2.YÖNTEM-tüm formu bir state olarak aldık
    const [newEmployee, setNewEmployee] = useState({
        name: "", email: "", address: "", phone: "" //başlangıç değerleri boş atanır
    })
    const { name, email, address, phone } = newEmployee;

    //onInpıutChange fonksiyonu ile herhangi bir değişiklikte ilk setNewEmployee çalıştırılır. ilk olarak newEmployee daki değerler alınır daha sonra eklenen değer alınır
    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }

    //form submit edildiğinde çalışacak fonksiyon handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone);
    }


    // //mounted-unmounted durumu
    // useEffect(() => {
    //     console.log("component mounted");

    //     return () => {
    //         console.log("component unmounted");
    //     }
    // }, [])



    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    //item eklemek 1.YÖNTEM
                    // value={name} //value ya girilen değeri setName ile yeni değer olarak atar
                    // onChange={e => setName(e.target.value)} //setName methoduna e.target.value atanır yani girilen değer
                    //item eklemek 2.YÖNTEM
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    // value={address}
                    // onChange={e => setAddress(e.target.value)}
                    name="address"
                    value={address}
                    onChange={e => onInputChange(e)}
                    rows={3}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                    // value={phone}
                    // onChange={e => setPhone(e.target.value)}
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>

            <Button variant="success" type="submit" block>Add New Employee</Button>
        </Form>
    )
}

export default AddForm;