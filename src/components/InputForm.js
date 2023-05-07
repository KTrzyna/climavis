import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import Image from 'mui-image'
import axios from '../axios';
import { useEffect } from 'react';
import { EXAMPLE_URL } from './Nav';


const InputForm = ({ tab }) => {
    const [sliderValue, setSliderValue] = useState(0);


    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Slider value:', sliderValue);

        const req = {
            "prompt": "hello",
            "negative_prompt": "",
            "steps": 50,
            "sampler": "ddim",
            "seed": 42,
            "height": 512,
            "width": 512,
            "count": 1,
            "image_url": EXAMPLE_URL,
            "control_net_model": "depth"
        }

        // axios.post("/async_hander", {
        //     "title": tab.title,
        //     "sliderValue": sliderValue
        // });
        // await axios.post("/async_hander", req)
        //     .then((res) => {
        //         console.log(JSON.stringify(res))
        //     })
        // Send data to the backend via POST
        var myHeaders = new Headers();
        myHeaders.append("x-sm-endpoint", "AIGC-Quick-Kit-a097ae48-1e67-4215-addf-c8444e3e1cd5");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "prompt": "hello",
            "negative_prompt": "",
            "steps": 50,
            "sampler": "ddim",
            "seed": 42,
            "height": 512,
            "width": 512,
            "count": 1,
            "image_url": "https://s3.amazonaws.com/crowdriff-media/mirror/9d5513292148491efe052c09e3b40dbbec9c132342c1a16e44d6590ceaa1f1d3.jpg",
            "control_net_model": "depth"
        });

        var requestOptions = {
            mode: 'no-cors',
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://fp87yy0ct5.execute-api.us-east-1.amazonaws.com/async_hander", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Zurich</h2>
            <div className='text-img-container'>
                <Image src={tab.orgsrc}
                    height="50%"
                    width="50%"
                />
                <span className='placeholder'></span>
                <Image src={tab.src}
                    height="50%"
                    width="50%"
                />
                <div className='slider-container'>
                    <p>{tab.text}</p>
                    <p>
                        {tab.title}:
                    </p>
                    <Slider
                        value={sliderValue}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={0}
                        max={3}
                        step={1}
                    />
                    <div className='button-container'>
                        <Button variant="contained" type="submit" onClick={handleSubmit}>
                            Generate
                        </Button>
                    </div>

                </div>

            </div>
            <div className='button-container'>

            </div>

        </form>
    );
};

export default InputForm;