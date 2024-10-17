import './contactForm.css'
import { useState, useEffect } from 'react'

//COMPONENTS
import Button from '../Button/Button'

export default function ContactForm() {

    //Campo para guardar dados do usuário organizado
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message:''
    })

    //O botão só se ativa quando for true
    //só será true se a validação (isValid) for true
    const [isFormValid, setIsFormValid] = useState(false) 
    const [formSubmitLoading, setFormSubmitLoading]= useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    
    const handleSubmit = async (e) => { // (e) = eventos como post, recarrega pagina...
        e.preventDefault()              // pega esse (e) e tira os eventos
        if(isFormValid){
            setFormSubmitLoading(true)
            try{
                const response = await fetch('https://api.web3forms.com/submit', {
                    method:'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({...formData, access_key: "be916c09-579f-40af-8858-8773f2acab7a"})
                })

                if(response.ok) {
                    setFormSubmitted(true)
                } else {
                    alert('erro ao enviar')
                }
            } catch(e){
                alert('error', e)
            } finally{
                setFormSubmitLoading(false)
            }
        }
    }
    
    
    //sempre que o formulario atualizar, ele valida
    //o formulario alizaliza sempre que usuario digita 
    useEffect(()=> {  

        //função que valida email
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/// Expressão para validar formato de email.
            return emailRegex.test(email)    // Retorna true se o email estiver no formato correto.
        }

        // & = Verifica se os campos não está vazio trim() e valida email
        //é uma condicional que retorna true ou false
        const isVAlid = formData.name.trim() && 
        formData.email.trim() && 
        isValidEmail(formData.email) &&  
        formData.message.trim()

        setIsFormValid(isVAlid) // Atualiza o estado que indica se o formulário é válido ou não.
    },[formData])


    //manda o valor do formulario para variavel objeto
    const handleChange = (e) => {
        const {name,value} = e.target; // = e.target.name e.target.value
        setFormData({
            ...formData, // Mantém os outros campos do formulário.
            [name]: value  // Atualiza o campo correspondente (name, email, message).
        })
    }

    return (
        <div className='container'>
            <div className='contact-form d-flex fd-column al-center'>
                <h2>We love meeting new people and helping them.</h2>
                <form onSubmit={handleSubmit}>        {/*evento de submit desativado */}
                    <div className='d-flex form-group'>
                        <input
                            className='form-input'
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Name*'
                            onChange={handleChange} /> {/*evento de mudança no valor no form */}


                        <input
                            className='form-input'
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Email*'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='d-flex form-group'>
                        <textarea
                            className='form-input'
                            name="message"
                            id="message"
                            placeholder='Mensagem*'
                            rows='4'
                            onChange={handleChange}
                            ></textarea>

                    </div>
                    <div className='al-center d-flex form-group jc-end'>
                        {formSubmitted && <p className='text-primary'>Sucesso</p>}
                        <Button type='submit' buttonStyle='primary' disabled={!isFormValid || formSubmitLoading}>
                            ENVIAR
                        </Button>
                    </div>

                </form>
            </div>

        </div>
    )
}