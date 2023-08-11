import { useState } from "react";
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const TransactionModal = ({ onModalHandler, onModalIsOpen, onTransactionHandler }) => {

    const MySwal = withReactContent(Swal);
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: toast => {
            toast.addEventListener('mouseenter', MySwal.stopTimer)
            toast.addEventListener('mouseleave', MySwal.resumeTimer)
        }
    })


    const [enteredTitle, setEneteredTitle] = useState('')
    const [enteredPrice, setEneteredPrice] = useState('')
    const [enteredAction, setEneteredAction] = useState('')

    // ? FORM VALIDATION
    const enteredTitleIsValid = enteredTitle.trim() !== "";
    const enteredPriceIsValid = enteredTitle.trim() !== "";
    const enteredActionIsValid = enteredAction !== ""
    let formIsValid = false

    if (enteredActionIsValid && enteredPriceIsValid && enteredTitleIsValid) {
        formIsValid = true;
    }

    const titleChangeHandler = ev => {
        setEneteredTitle(ev.target.value)
    }

    const priceChangeHandler = ev => {
        setEneteredPrice(ev.target.value.trim())
    }

    const actionChangeHandler = ev => {
        setEneteredAction(ev.target.value.trim())
    }

    const transactionData = {
        title: enteredTitle,
        price: Number(enteredPrice),
        action: enteredAction
    }

    const formHandler = ev => {
        ev.preventDefault()

        Toast.fire({
            icon : "success",
            title : "Added successfully"
        })

        onTransactionHandler(transactionData)
        setEneteredTitle("")
        setEneteredPrice("")
    }

    return (
        <>
            {
                onModalIsOpen &&
                <form onSubmit={formHandler} action="#" className = 'w-screen h-screen fixed top-0 left-0 scale-110 transition-all'>

                    <div onClick = {onModalHandler} className = 'w-full h-full left-0 top-0 bg-black z-10 opacity-70'></div>

                    <div className = 'modal_content absolute top-1/2 left-1/2 z-20 -translate-x-2/4 -translate-y-2/4 bg-white p-8 px-14 w-3/12 rounded-xl'>

                        <button onClick = {onModalHandler} className = 'rounded-lg transition-all hover:bg-sky-950 hover:text-white translate-x-36 -translate-y-5 px-1'>
                            <i className = 'bx bx-x text-lg '></i>
                        </button>

                        <div>
                            <div className = 'w-full text-start mb-4'>
                                <label htmlFor = "title">title :</label>
                                <div className = "text-center">
                                    <input type = "text" autoComplete = "off" value = {enteredTitle} onChange = {titleChangeHandler} className = 'px-2 p-1 outline-none border-b-2 border-b-sky-800' id = 'title' placeholder = 'title' />
                                </div>
                            </div>

                            <div className = 'w-full text-start my-4'>
                                <label htmlFor = "price">price :</label>
                                <div className = "text-center">
                                    <input type = "number" autoComplete = "off" value = {enteredPrice} onChange = {priceChangeHandler} className = 'px-2 p-1 outline-none border-b-2 border-b-sky-800' id = 'price' placeholder = 'price' />
                                </div>
                            </div>
                        </div>

                        <div className = 'pt-5 mt-7'>
                            <div onChange = {actionChangeHandler} className = "flex flex-wrap justify-between">
                                <p className = "text-start w-full">Choose an action : </p>

                                <div className = "text-start my-2">
                                    <label htmlFor = "deposit" className = "pr-3 p-1 cursor-pointer">deposit</label>
                                    <input type = "radio" value = "deposit" id = "deposit" className = "cursor-pointer" name = "radio_btn" />
                                </div>

                                <div className = "text-start mt-2">
                                    <label htmlFor = "withdraw" className = "pr-3 p-1 cursor-pointer">withdraw</label>
                                    <input type = "radio" value = "withdraw" id = "withdraw" className = "cursor-pointer" name = "radio_btn" />
                                </div>
                            </div>
                        </div>

                        <button type = 'submit' disabled = {!formIsValid} className = 'capitalize disabled:cursor-not-allowed disabled:bg-gray-500 bg-sky-950 hover:bg-sky-800 transition-all text-white px-2 p-1 rounded-lg mt-5'>submit</button>
                    </div>
                </form>
            }
        </>
    );
};

export default TransactionModal;