import React from 'react'
import { useEffect } from 'react';
import { Fragment } from 'react'
import { useSelector } from 'react-redux';
import ProfileData from '../../components/profile.jsx'

export default function myProfile() {




               return (

                              <Fragment >
                                             <div style={{
                                                            paddingTop: "7rem",
                                                            paddingLeft: "2rem",
                                                            paddingRight: "2rem"

                                             }}>
                                                            <ProfileData />
                                             </div>
                              </Fragment>
               )
}
