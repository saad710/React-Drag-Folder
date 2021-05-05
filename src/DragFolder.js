
import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; 
import './DragFolder.css';


const data = [
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'fingerline' }] },
    { title: 'Mutton', children: [{ title: 'half' }] },
    { title: 'Beef', children: [{ title: 'full' }] },
    { title: 'Egg', children: [{ title: 'dozen' }] },
]






const DragFolder = () => {
    const [treeData,setTreeData] = useState(data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  
    // const renderButton = (title) => {
    //   return  <button >Your button</button> 
    // }
    return (
        <div style={{ height: 900 }}>
        <SortableTree
          treeData={treeData}
          onChange={treeData => setTreeData(treeData)}
        //   generateNodeProps={({ node, path }) => ({
        //     title: (
        //       <a href={node.url}>
        //       {node.title}
        //       <span className='title-button'> <a > {renderButton(node.title)}</a></span>
        //     </a>
                
        //     ),
        // })}
        generateNodeProps={extendedNode => ({
          title: (
              <p href={extendedNode.node.url}>{extendedNode.node.title}</p>
          ),
          buttons:  [<a ><Button  onClick={handleShow} >open form</Button> <button> $ </button> <button> # </button></a> ] ,
         
      })}
        />

<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
};

export default DragFolder;