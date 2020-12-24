import '../../css/footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='aboutUs'>
        <p><strong>ABOUT US</strong> <br/> 
          Company Shelby Limited é uma 
          rede de lojas de departamento 
          brasileira
        </p>
      </div>

      <div className='help'>
        <p><strong>ADDRESS</strong> <br/>
          Company Shelby Ltda.
          CPF/CNPJ: 12.345.678/0000-01
          Av. Bernardino de Campos, 98
          São Paulo, SP 12345-678
          info@shelbycompany.com 
        </p>
      </div>

      <div className='contact'>
        <p><strong>CONTACT</strong> <br/> 
          wellingtonsantos5000@gmail.com
          Telefone: (86) 81862803

        </p>
      </div>
    </div>
  )
}

export default Footer