import {useNavigate} from "react-router-dom"

export default function Home(){

    const navigate = useNavigate();

    return(
        <div className ="h-screen bg-cover flex items-center justify-center w-full bg-center" 
        style ={{backgroundImage:"url('/background_image.jpg')"}} >

            <div className="text-white  p-10 rounded-xl text-center">
                
                <h1 className ="text-4xl mb-4 font-bold">MindMender</h1>
                <p className="text-lg mb-6">
                    Get deep insights into your emotional state in seconds.<br/>
                    Our AI-powered system helps you understand <br/>what you're feeling — and what to do next.
                </p>
                <button 
                 onClick={() => navigate('/analyze')}
                className="px-3 py-3 bg-purple-600 rounded-lg mt-10 hover:bg-purple-700 transition "
                       >Getting Started</button>
            </div>
             
        
        </div>
    )
}