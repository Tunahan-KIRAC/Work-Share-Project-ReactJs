
import { useEffect } from 'react'
import { Badge, ListGroup } from 'react-bootstrap'
import { getCategories } from '../api/workApi'
import { useWork } from '../context/WorkContext'




export const ListCategories = () => {

    const { categories, setCategories } = useWork()

    useEffect(() => {
        try {
            getCategories().then((res) => {
                console.log(res.data)
                setCategories(res.data)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])


    return (
        <ListGroup numbered>
            {categories?.map((item) => (
                <ListGroup.Item
                key={item.id}
                as="ul"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.title}</div>
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            ))}



        </ListGroup>
    )
}
