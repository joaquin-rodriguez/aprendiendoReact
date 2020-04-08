import React from 'react';
import { Button, Modal, Dropdown } from "react-bootstrap";

function Info() {
    return (
        <div className="AboutNotrix">
            <h2>About Notrix</h2>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    What do you whant to know?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">What is Notrix?</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Can I trust Notrix with my Info?</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">What is the true nature of reality?</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Info