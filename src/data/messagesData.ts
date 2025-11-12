import { ImageSourcePropType } from "react-native";

type messageItem ={
    messangerName: string,
    img: ImageSourcePropType;
    time: string;
    message: string;
}
type messageFilter ={
    messageHeadName: string;
    msgdata: messageItem[];
}

export const MessageFilterData: messageFilter[] = [
    {
        messageHeadName:'All inboxes',
        msgdata:[
            {
                messangerName:'Nistala sivakameshwari',
                img:require('@/assets/mentors/14d7098314fec7fcc655d594bb805a2c8ef74f12.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Kosuru krishnaveni',
                img:require('@/assets/mentors/2e79d81f793e01b23fc9379682ef98731578ecae.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Vasavi Chaganti',
                img:require('@/assets/mentors/d822c867908add29c2b4f1df333f7ceccb422417.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Praveena Manohar',
                img:require('@/assets/mentors/c20ce90f8a3dde4ba7033a74cc3b4405a430a5c0.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Updates',
                img:require('@/assets/mentors/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp'),
                time:'12:30 pm',
                message:'Course curriculum has been updated pl..'
            },
            {
                messangerName:'Akshaya Murali',
                img:require('@/assets/mentors/a03922ad75d1e293383eae26fa459882aa1fcf3b.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Santoshi Lakshmi',
                img:require('@/assets/mentors/67e725b1c1fdab349aa14e23aec88774200e4b04.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Ramaa',
                img:require('@/assets/mentors/14d7098314fec7fcc655d594bb805a2c8ef74f12.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Prathibha P',
                img:require('@/assets/mentors/87fca1215b3b65b52335372c32fead53cfc63d85.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Darma gowrii',
                img:require('@/assets/mentors/bbf36e887845b2ca4101091614d5e4edd524cc32.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Saraswathi Deepthi',
                img:require('@/assets/mentors/54fc615b06749355c448c1650258f3e627707fbc.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },

        ]
    },
    {
        messageHeadName:'Read Messages',
        msgdata:[
            {
                messangerName:'Praveena Manohar',
                img:require('@/assets/mentors/c20ce90f8a3dde4ba7033a74cc3b4405a430a5c0.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Ramaa',
                img:require('@/assets/mentors/14d7098314fec7fcc655d594bb805a2c8ef74f12.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Updates',
                img:require('@/assets/mentors/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp'),
                time:'12:30 pm',
                message:'Course curriculum has been updated pl..'
            },
            {
                messangerName:'Akshaya Murali',
                img:require('@/assets/mentors/a03922ad75d1e293383eae26fa459882aa1fcf3b.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Santoshi Lakshmi',
                img:require('@/assets/mentors/67e725b1c1fdab349aa14e23aec88774200e4b04.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Prathibha P',
                img:require('@/assets/mentors/87fca1215b3b65b52335372c32fead53cfc63d85.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Darma gowrii',
                img:require('@/assets/mentors/bbf36e887845b2ca4101091614d5e4edd524cc32.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Saraswathi Deepthi',
                img:require('@/assets/mentors/54fc615b06749355c448c1650258f3e627707fbc.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },
        ]
    },
    {
        messageHeadName:'Unread Messages',
        msgdata:[
            {
                messangerName:'Nistala sivakameshwari',
                img:require('@/assets/mentors/14d7098314fec7fcc655d594bb805a2c8ef74f12.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Kosuru krishnaveni',
                img:require('@/assets/mentors/2e79d81f793e01b23fc9379682ef98731578ecae.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Vasavi Chaganti',
                img:require('@/assets/mentors/d822c867908add29c2b4f1df333f7ceccb422417.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
        ]
    },
    {
        messageHeadName:'pinned Messages',
        msgdata:[
            {
                messangerName:'Ramaa',
                img:require('@/assets/mentors/14d7098314fec7fcc655d594bb805a2c8ef74f12.png'),
                time:'12:40 pm',
                message:'Your understanding of naadam, sada...'
            },
            {
                messangerName:'Prathibha P',
                img:require('@/assets/mentors/87fca1215b3b65b52335372c32fead53cfc63d85.png'),
                time:'12:30 pm',
                message:'Your understanding of naadam, sada...'
            },
        ]
    },
    {
        messageHeadName:'Updates',
        msgdata:[
            {
                messangerName:'Updates',
                img:require('@/assets/mentors/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp'),
                time:'12:30 pm',
                message:'Course curriculum has been updated pl..'
            },
            {
                messangerName:'Updates',
                img:require('@/assets/mentors/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp'),
                time:'12:30 pm',
                message:'Course curriculum has been updated pl..'
            },
        ]
    },
]