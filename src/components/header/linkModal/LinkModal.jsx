import './linkModal.scss'
import React, { useState } from "react";
function LinkModal({text, a1, a2, a3}) {

    const [isModalVisible, setModalVisible] = useState(false);

    const handleMouseEnter = () => {
        setModalVisible(true);
    };

    const handleMouseLeave = () => {
        setModalVisible(false);
    };


    return (
        <>
            <div className="linkModal">
                <a className='linka'
                   href="#"
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                >
                    {text}
                </a>

                {isModalVisible && (
                    <div className='modal'
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                    >
                        <a href="#">{a1}</a>
                        <a href="#">{a2}</a>
                        <a href="#">{a3}</a>
                    </div>)
                }
            </div>

        </>
    )
}
export default LinkModal