import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { RiDeleteBin6Line } from "react-icons/ri";

const AppointmentList = ({appointments , handleDelete,handleDoubleClick}) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>

      {
        appointments.map(({id,patient,consulted,doctor,day})=>(
          <div key={id} className={consulted ? 'appointments consulted' : 'appointments'}  onDoubleClick={() => handleDoubleClick(id)}>
            <Row className=''>
              <Col>
              <h4>{patient}</h4>
              <h4>{doctor}</h4>
              </Col>
              <Col>
              <h5>Date:{new Date(day).toLocaleDateString("tr")}</h5>
              <h6>Time:{new Date(day).toLocaleTimeString('tr')}</h6>
              </Col>
              <Col className="text-end">
              <RiDeleteBin6Line className="text-danger fs-1 " type="button" onClick={() => handleDelete(id)}/>
              </Col>
            </Row>
          </div>
        ))
      }
    </Container>
  )
}

export default AppointmentList
