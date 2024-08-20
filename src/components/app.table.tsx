import Table from 'react-bootstrap/Table';
import {IBlog} from "@/types/backend";
import Button from "react-bootstrap/Button";
import CreateModal from "@/components/create.modal";
import {useState} from "react";

interface IProps {
    blogs: IBlog[]
}

function AppTable(props: IProps) {
    const [showModal, setShowModal]=useState<boolean>(false);

    const {blogs} = props;
    console.log(blogs);
    return (
        <>
            <div className="mb-3" style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Table Blogs</h3>
                <Button variant="secondary" onClick={()=>setShowModal(true)}>Add</Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Is It Done</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {blogs?.map((blog: IBlog) => {
                    return (
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.description}</td>
                            <td>{blog.isItDone}</td>
                            <td>
                                <Button>View</Button>
                                <Button variant="warning" className="mx-3">Edit</Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    )
                })}


                </tbody>
            </Table>
            <CreateModal showModal={showModal} setShowModal={setShowModal}/>
        </>
    );
}

export default AppTable;