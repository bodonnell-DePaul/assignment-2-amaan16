import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const getVariant = (dueDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const differenceInTime = dueDateObj - currentDate;
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Convert milliseconds to days

  if (differenceInDays < 2) {
    return 'danger'; // Due date < 2 days
  } else if (differenceInDays < 4) {
    return 'warning'; // Due date < 4 days
  } else if (differenceInDays < 7) {
    return 'success'; // Due date < 7 days
  } else {
    return 'primary'; // Due date > 7 days
  }
};

function TodoItems({ todos, handleDateChange, handleDescriptionChange }) {



  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <ListGroup as="ul">
            {todos.map((todo, index) => (
              <ListGroup.Item key={index} eventKey={index} as="li" action
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
