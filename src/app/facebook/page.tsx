'use client'
import {useRouter} from "next/navigation";
import Button from "react-bootstrap/Button";
const FaceBook=()=>{
    const router = useRouter();

    const handleBtn=()=>{
        router.push("/");
    }
    return(
        <div>
            Facebook page
            <div>
                <Button variant="danger" onClick={handleBtn}>Phap</Button>
                <button onClick={()=>handleBtn()}>Back Home</button>
            </div>
        </div>
    );
}
export default FaceBook;