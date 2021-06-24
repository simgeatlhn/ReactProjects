import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react"; //Context i kullanmak için useContext hook unu import ederiz

//theEmployee- Employee.js den EditForm.j ye gönderilen prop bilgilerin edit kısmında gözükmesi için
const EditForm = ({ theEmployee }) => {

    const { updateEmployee } = useContext(EmployeeContext);

    const employee = theEmployee;
    const id = employee.id;

    //form elemanlarının her biri için ayrı ayrı useState kullanırız
    const [name, SetName] = useState(employee.name);
    const [email, SetEmail] = useState(employee.email);
    const [address, SetAddress] = useState(employee.address);
    const [phone, SetPhone] = useState(employee.phone);

    const updatedEmployee = { id, name, email, address, phone } //güncellenen employee bilgilerini al

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee); //EmployeeContext den gelen fonk ve parametreler
    }

    return (
        <Form onSubmit={handleSubmit} >

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                    name="email"
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    value={address}
                    onChange={(e) => SetAddress(e.target.value)}
                    rows={3}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                    name="phone"
                    value={phone}
                    onChange={(e) => SetPhone(e.target.value)}
                />
            </Form.Group>

            <Button variant="success" type="submit" block>Update Employee</Button>
        </Form>
    )
}

export default EditForm;