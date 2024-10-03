import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const getVariant = (dueDate) => {
  // this code is according to me
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const differenceInTime = dueDateObj - currentDate;
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); 
  if (differenceInDays < 2) {
    console.log('danger')
    return 'danger'; // Due date < 2 days
  } else if (differenceInDays < 4) {
    console.log('warning')
    return 'warning'; // Due date < 4 days
  } else if (differenceInDays < 7) {
    console.log('success')
    return 'success'; // Due date < 7 days
  } else {
    console.log('primary')
    return 'primary'; // Due date > 7 days
  }
  // console.log('currentDate: ',currentDate,'  dueDateObj  ',dueDateObj,'  differenceInDays  ',differenceInDays)

  //logic acording to test file
  // const currenDate = new Date();
  // const dueDatObj = new Date(dueDate);
  // const diffTime = Math.abs(dueDatObj - currenDate);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log('currenDate: ', currenDate, '  dueDatObj  ', dueDatObj, '  diffDays  ', diffDays)
  // if (diffDays > 7) return 'primary';
  // if (diffDays <= 7 && diffDays > 4) return 'success';
  // if (diffDays <= 4 && diffDays > 2) return 'warning';
  // return 'danger';
};

function TodoItems({ todos, handleDateChange, handleDescriptionChange }) {



  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <ListGroup as="ul">
            {todos.map((todo, index) => (       
                <ListGroup.Item key={todo.title} eventKey={index} as="li" action
                  variant={getVariant(todo.dueDate)}>
                  {todo.title}
                </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {todos.map((todo, index) => (
              <Tab.Pane eventKey={index}>
                <div
                  contentEditable
                  suppressContentEditableWarning={true}
                  onBlur={(e) => handleDescriptionChange(index, e.target.innerText)}
                >
                  {todo.description}
                </div>
                <div>
                  <input type='date' value={todo.dueDate} onChange={(e) => handleDateChange(index, e.target.value)}></input>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

  );
}

export default TodoItems;
