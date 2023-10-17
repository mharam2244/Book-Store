import React from 'react'

export default function CopyRight() {
    const year = new Date().getFullYear()
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <p className='text-center'>
                        CopyRight {year}. All Right Reserved By M.Haram
                    </p>
                </div>
            </div>
        </div>
    )
}
