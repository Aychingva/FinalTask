import React from 'react'
//for home page
function Blogcards() {
    
  return (
    <div className=' mt-[300px] flex gap-[20px] my-[50px] mx-[100px]'>
        <div className='flex flex-col border shadow gap-[10px]'>
        <img src="https://s3-alpha-sig.figma.com/img/b5ef/6459/ad90694e5e71a84b37700b33d9cf6575?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gacltS~6jeBo5O99AzaIY0FTvA9uF9T9Ku61X8I3NKS68UWz6sSQqqTUuEqUjmbgtnbPZl8wI5wf3wAu52txRQNipueb7mievIne9v1slECxwB~tL0lr-0gSXmdDEEUQ~pg74RfzNgSeAaiSaGteN1FQgl0u1iUnCTm7~0vj3ap-WAl7rk8f0orwaoQfNzYzFPhp4MmTyyYTqZiGTVVverJJxPsiWAEOKJ6Dg8ZVCi79Dz5xX-hNLFtYz2cZ91v5P3Gy8iwBtAsAWRtPgEdWa7pUpdy3raASgW7-GqeiK~9CsBu8r9hC950xzVdlBRvhMU-sIgEbmBrGKgEJ1FBhkg__" className='w-[600px]'/>
            <div className='  w-[600px]   h-[25vh] bg-[#fff] px-[20px]'>
                <h1 className='pt-[10px] pb-[10px] font-semibold'>Bag Trends for Summer 2020</h1>
                <p className='pb-[20px] text-[#00000014] '>Fashion | August 24 2020|No comments</p>
                <p>Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...
                </p>
            
            </div>
        </div>

        <div className='flex flex-col gap-[10px] border shadow'>
            <img src="https://s3-alpha-sig.figma.com/img/fb46/4c56/1d20ff0dd325a020616b93aab672b684?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4l5QUMF~QGlfKO~qkJRsgIPM7I1JHhHWrICAMDESq3tiLwH2jcAv4rnRVaRu2VtwuSi5ytY-HQ2bDbHjBwe5sL5~Te0TjivSQNWDD0R-d5526dX6BKKxtRaAZj3sG03ons7tgsaXOhkWhncFzrN3D4dbeStnd9ySBX1cTJXAIKBXuwPz-p8-gEvmX491Ows~jRySY-DpLGP0mqo~XsCk1s12CbhVj0nrmNrxCNqsWB-8PxXssXDxcejPURIwtq8xIK1ntJKuLk3Z~Ce2lZbpuyh97qT33db1ZGDk47XQ8T7aje5ipbAV1pRjRb1zE-Gs47pCKSh8aMW1VG~nRsW9A__"/>
            <div className='w-[600px]  h-[25vh] bg-[#fff] px-[20px]'>
                <h1 className='pt-[10px] pb-[10px] font-semibold '>Top 10 of This Season’s Hottest Sneakers</h1>
                <p className='pb-[20px] text-[#00000014] '>Lifestyle |July 16, 2020|4 comments</p>
                <p>Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus..</p>
            
            </div>
        
        </div>
        
           

           
    </div>
  )
}

export default Blogcards