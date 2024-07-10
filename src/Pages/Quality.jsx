import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

const Quality = () => {
    return (
        <>
            <div className='l4'>
                <div className='l5'>
                    <PublicIcon style={{ fontSize: '40px' }} />
                    <h4> Worldwide Shipping</h4>
                    <p>  It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className='l5'>
                    <CallMadeIcon style={{ fontSize: '40px' }} />
                    <h4>Best Quality</h4>
                    <p>  It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className='l5'>
                    <LocalOfferIcon style={{ fontSize: '40px' }} />
                    <h4>Best Offers</h4>
                    <p>  It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className='l5'>
                    <EnhancedEncryptionIcon style={{ fontSize: '40px' }} />
                    <h4>Secure Payments</h4>
                    <p>  It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </>
    )
}

export default Quality