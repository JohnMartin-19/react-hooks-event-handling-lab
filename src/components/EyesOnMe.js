// Code EyesOnMe Component Here
function EyesOnMe(){
    return(
        <button onFocus={event =>
            console.log('Good')
        } onBlur={event =>
            console.log('Hey! Eyes on me mf!!')
        }>EyesOnMe</button>
    )
}

export default EyesOnMe