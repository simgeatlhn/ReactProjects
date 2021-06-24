import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useEffect, useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext); //EmployeeContext import edildikten sonra deleteEmployee fonksiyonunu tanıması için eklemeyi UNUTMA

    const [show, setShow] = useState(false) //true olursa Modal gösterilir- onCLick ile true yapılacak- bunun için handleClose ve handleShow fonksiyonları kullanılacak
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //Update Employee modal ı güncellendikten sonra otomatik kapanması için
    useEffect(() => {
        handleClose();
    }, [employee]) //tek bir employee değiiştirileceği için employee

    return (
        //React.Fragment yerine <> kullanılabilir.KISAYOL //map fonk için
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"> <i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>

                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>


            </td>

            {/* //her employee için farklı model açılması için oluşturulur */}

            <Modal show={show} onHide={handleClose} >
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;