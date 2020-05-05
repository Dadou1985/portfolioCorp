import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import Office from '../../images/office.jpg'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Input } from 'antd'
import firebase from './firebase'


const Contact = () => {

    const [show, setShow] = useState(false);
    const [formValue, setFormValue] = useState({nom: "", mail: "", message: ""})

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }))

      const classes = useStyles()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) =>{
        event.persist()
        setFormValue(currentValue =>({
          ...currentValue,
          [event.target.name]: event.target.value
        }))
      }
      
    const { TextArea } = Input;

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormValue("")
        let marker = Date.now()
        firebase.firestore().collection("messages").add({
            name: formValue.nom, 
            mail: formValue.mail, 
            message: formValue.message,
            markup: marker
        }).then(function(docRef){
            console.log(docRef.id)
        }).catch(function(error){
            console.log(error)
        })
        handleClose()
    }


    return (
        <div id="contact" style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            height: "600px",
            backgroundImage: `url(${Office})`,
            backgroundPositionY: "40%",
            backgroundPositionX: "30%"
        }}>
            <div style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "5%",
                fontSize: "Larger",
                color: "lightgrey"}}>
                <h1 style={{textAlign: "center", fontSize: "60px", filter: "drop-shadow(5px 5px 2px black)", color: "grey"}}>Contact</h1>
                <h1 style={{filter: "drop-shadow(5px 5px 2px black)", marginBottom: "5%"}}>Si notre présentation vous a séduit</h1>
                <Button variant="secondary" style={{filter: "drop-shadow(5px 5px 2px black)"}} onClick={handleShow}>Contactez-nous</Button>
            </div>
            <Modal show={show} onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Formulaire de contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{
                            display: "flex",
                            flexFlow: "row wrap",
                            justifyContent: "space-around",
                            padding: "5%",
                            textAlign: "center"
                        }}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField label="Nom ou Raison Sociale" color="secondary" value={formValue.nom} name="nom" onChange={handleChange} />
                                <TextField label="E-mail" color="secondary" color="secondary" value={formValue.mail} name="mail" onChange={handleChange} style={{marginBottom: "8%"}} />
                                <TextArea rows={4} placeholder="Ecrire un message..." style={{border: "none"}} value={formValue.message} name="message" onChange={handleChange} />
                                </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" onClick={handleSubmit}>
                        Envoyer
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default Contact