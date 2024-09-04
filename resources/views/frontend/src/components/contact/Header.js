import React from 'react'

export default function Header() {
  return (
    <>
        <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row ms-5">
                        <h2 className="text-start">Contact Us</h2>
                        <ul>
                            <li> <a href="/"><i className="bi bi-house-door"></i> Home</a></li>
                            <li><i className="bi bi-chevron-double-right pe-2"></i> Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}
