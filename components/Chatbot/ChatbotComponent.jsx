import React, { useEffect, useState } from 'react';


const ChatbotComponent = () => {
    const [messages, setMessages] = useState('What do you want to buy?');
    const [response, setResponse] = useState("");
    

    useEffect(() => {
        handleSubmit()
    }, [messages, response])


    const handleSubmit = () => {
        console.log(messages)

        if (messages && messages === 'I want to buy mango pulp') {
            let res = `Ok. If you want less than 2000 kg, contact 01730894498.
            If you want more than 2000 kg, send us a mail including quantity, Pyment,Delivery details.`
            setResponse(res)
        }
        else if (messages === 'What do you want to buy?') {
            let res = "I want to buy mango pulp"
            setResponse(res)
        }
        else if (messages === 'I want bricks') {
            let res = "Contact 01628766849"
            setResponse(res)
        }
        else if (messages === 'I want puffed rice') {
            let res = "Contact 01730894487"
            setResponse(res)
        }
        else if (messages === 'I am looking for job') {
            let res = `Send us a mail including your qualification.
            Smart working technique will be prioritized.`
            setResponse(res)
        }
        else {
            let res = `sorry , i can not understand you.`
            setResponse(res)
        }
        console.log(response)
        return response
    }
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">

            <input type="text" value={messages} name='message' className="py-3 px-4 max-w-lg block border  w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                onKeyDown={(e) => setMessages(e.target.value)} onChange={(e) => setMessages(e.target.value)} />

            <p className="px-12 py-3 rounded-md bg-slate-200 text-black mx-auto max-w-lg my-4">
                {response.length && response}
            </p>

        </div>
    );
};

export default ChatbotComponent;
