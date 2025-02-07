import React from 'react'
import Newproducts from '../../companents/newproducts'
import Salesproduct from '../../companents/sales'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { PiMoneyBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import Blogcards from '../../companents/blogs';

function Home() {
  return (
    <div  >
        
        <div className='relative '>
            <img src="https://s3-alpha-sig.figma.com/img/5ae2/26c1/af64d15832c9203ba037bfeb88019404?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lc9WweJhv~GdlYPHt33QGPjLepAVYIOS5NHJUp-S7~qRdT0exPiGHvo5C~wh6vc6fKAJqqmnOaHAwA9m~oYu4Qzb2nA6bIk9NDiERUV-S4FNOAXLBifsS3ZvUIUybLhHGpl1W63RarNIrLbIKkBjjtE7wlaBOxvKecC3gQTcX64qJPGL2YN0BpFELJHK03Yj8Lh3f8kV-AzNTDAjxyhLjFvlv-EOrkiQcGJN1i4NJ1B7goRsfAMVAPLt-~JFA-9fqp9CBQ2etJfQEcDIWDWLFwiBCvDpe1PiuVJi8xCsmPjPcc23DH5Dns8nR8mmBPhwMKDnsIT9s5pq-kQEheXCxw__" />
           
            <div className=' flex gap-[30px] justify-between items-center mx-[120px] mt-[-20px] mb-[30px]'>
                <div>
                <img src="https://s3-alpha-sig.figma.com/img/5ac0/a0bb/f8506dcdd738de8c8b81f18912df169b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZJfyjsLZKcqAZEhHy3wJwL-vO9l0xndIRpAAkPu0pSUafQC8dhpftaMhT~XmhXwJASLCG5ojcKJB~TgPYU9VsSG7u-ZpsNzXk14vqNn-UsZ1uuRauy0UCpIcxLxOnpGoBO6DM-3ptvHwYOUUlTXhOgdfrHgJGbQpKRdoMR~Je7abca-zxmwD5kei3-gNJ3h4YX2O5Vyi5M728VH~j27y1PnbQPBh9Xw0ebEQVNC5tDz9~dGnP8oNMIkHEeE8wvFpqikt4zlH4S8fEitoU9sjNuHU4cq8eV3SsB8yjntGbYqnnZM9jCC3ace84Wp7bMP5kx7KEgpkNICDuahiAMfDQ__" />

                </div>
                <div >
                <img src="https://s3-alpha-sig.figma.com/img/308e/2336/8d6e973042e0c9816e49ca2bb6f77d2d?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKjqjoyXCgEogIYSBTZMKNuiC6uXlTP62EGkEYYnFNHSVluHwOjvGaazGsbyunie9inVPbI5Vpd96LsoWF0KD8QDMvgs0kFxrybGbauWl5Djeg67VNWGPvUT7DVbt5hT7hSPisYRd~IlNG68f-KqJ1AVeVg8qO3B1kFlz8FRp8HJqIgLYopkbXMN4PDvYq3Nay-RU40ryWs6bFi~cCRYWkFB46s-IbFmQZ-7PKBxfHGiQF2MCAdasZWQYqcZKtzkLBsWxdw8yIix5cmlRt~Yh2wjksj6LAfZkQpF0smLTZVAZRlNQO16ntYLYvUpLd~WwbGso9nG-MBB1cwXsYPa0w__" />
                </div>
               
                <div >
                    <img src="https://s3-alpha-sig.figma.com/img/97c6/7a34/8edfd4b4c1741a1950440ff015444ab6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQiY0dUOmEyrxN1--lWhgSNyni7ktaQFPOzlHXzKrtQuN1RuyAn-j~~XcIdYmWWHKxwqHVFDjrHgACGlRkqRkepHwkbvNKkr~~z8kau-ipLwpi7FDG21K~nKBhyUxH5qVh3TMlaKsKQ-XOHfQB0brVSXbq43sJ0gkTNMkh-u9tr51WIVXoK0qBvakJIfJxfhs9apkUUwNNqqZVpwUKtI6HLkijN9ABv~dUk0QvZi1nAOkFJrGiE0hyAdEOCaS84QGPJ5u8LyzqdwxsqbLlijX1r5Ad5lD2U6NDMhcjo3ovOROu8vG0BCdSFmMSi6Uyav3jNz885-PtRulr-6hDZEhw__" />
                </div>
               
            </div>
          
        </div>

        <Newproducts/>
       
       
    <div className="grid grid-cols-[0.5fr,2fr,1fr] grid-rows-[repeat(8,100px)] gap-[5px] mx-[30px] mb-[50px] mt-[200px]">
    
        <div className="col-span-1 row-span-3 ">
            <img
                src="https://s3-alpha-sig.figma.com/img/805f/4c88/2c609167675a9e10214ac9a9cd968786?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMGuOtCHTBhKvskzi2KvV5su31vwIuCboCzxtwXPr9lqQWexS-hSG5knOcpAwp8iz4rHXpmt1lEm3a5pdR6JB3~JtNrOuWNd~s3CAGuV0G6rVeRWC2SflBmAmPRDZlIDYtVyjKoP48Jbyw0YCPhs2oze-7eVh2FtBfPbLuOqZNwKWQd3PNOZkjK9hRb3p-MMzRaLZnEpGj4-tC8HY3mypFxHDfWZ~oWdzJIt0bInTg26eCiKGPA6FN1IFltJnGo3mDSB1Uk2TetK0azjpiPUPAer9SJ6f5IebVXVKQ24GNExGwS0ZSlNM5UIG8AFEETxPRL-v71U~LURPAiS3JNZbQ__"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
        
        <div className="col-span-2 row-span-3" >
            <img
                src="https://s3-alpha-sig.figma.com/img/2f7a/bf09/042d625ea534920c386d863fd0489a21?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ktZwDSLgUTPEp1x3Jsn-Mw--332RQxb4QnjyUI4USkdp5q1QdeIdyePZywcHFekd7CNgYqXy7~U1ToFlGjuwy-KeCuvZQH959RK96s9vBOM6v6bp-E0thytCYTuTqwHekhY0bG9UQeOZVQyGqU6XdkGa1T1lTH65-z7sDZwU5y0TAe0yQJ-peg4FGE3YmEjhUlVtba5x1oV8a9ywTFDqCaAmBIqWqb0QHDKdcaVQ1w2XdLrQWOl7EJ9gEETyXvZ09yAan50EwSbxrQi9~g8EklDQhr~YG-Bk3XxHcxq4OBbpkn24U8pO0vy0HntVe7QYIC8dJxDShhLfTwJJ7KTBig__"
                alt="Image 2"
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
        
        <div className="col-span-2 row-span-5">
            <img
                src="https://s3-alpha-sig.figma.com/img/ce6b/820e/f5075c67538c877dd345e19ad7b07493?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MhYkz~m67JkOP34SJDaEL6ghJqTLmtnWUL99wRFzjkTiv3--x-MJJ-Gf~AxduvW6IToapQEvKXCI770d2Cz4DZ~ZN8NEaPFJ5cV9morwm8JMt182DoDJ7OkD9qlNJBukgutJFz5krETRSokWx1nZUQpwOFzdFoK6vF3jfQJeWyLLrcr7dOuI-GekpQsQIpBtuKegRDcwgYtAvTywKgPALpg1xqBb~jmluElqQXjU0wlQWdhN43wgyFPQOYcHmh6~NVqi-MgLAprjyzOHurs1ECHYJY37jVkPOwwtccNr3yxNz4ClsrL0BxXnw4eKcB2q-Mxbm0kcEfdTSkl38tl9TA__"
                alt="Image 3"
                className="w-full h-full  object-cover rounded-lg"
            />
        </div>
        
        <div className="col-span-1 row-span-3">
            <img
                src="https://s3-alpha-sig.figma.com/img/b275/8c26/e3238cc1420f61c394aa3f364173eee5?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IanD26VAlJMXo1pKoMdqYGb7aBm~nHRFdqx2g~~KZ2KxRswweC21xmigtgDgyxIEXm5bnkXJ9FJSRj27g6P8XXwPNZG8WPXxWBGNYx5bkDq79PBkXHi73E1tCf-wbkErB~2Ghq~V4RiFcaJ9OqxLhdV4JW-CWp83Uy4B39g-b0c9wV1yak50HdsHHFAOzPaAqgJRhY~V6izAE9mG2VhxctWVhJrEfG92yRHFWdi8aykOiocqKqYaCE~3Bl5PRJ7MjVCpi4sIBa0XuohaoxLTM3zusszJxn~AfdKtllvc2s2WHZVtatlHiTfl6JND71vf1xDoIU4~LaOLG098fufnkA__"
                alt="Image 4"
                className="w-full h-full  object-cover rounded-lg h"
            />
        </div>
    </div>

    <div className='container mx-[auto] ' >
        <div className='flex justify-center mt-[200px] mb-[30px] '>
            <h3 className='font-bold text-[30px]'>Popular categories</h3>
        </div>
        <div className='flex justify-between  gap-[30px] mb-[50px]'>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/d6df/f8d9/08dac84076c06a8e9f9be1a4e206de56?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XomBzTASZx0nt02qJc5NJ29TXJBUuuLGNaaS~tT6R-7zLq6tIfoa36HsjC3BNLWnNR7DhyVwJvwtcuBF1fwiv7inBP7t5Vf5RGpX8mcRcjH3mkIvIHvDnQQJxRQS8kMEnMk1p3Zc0o4tyE-F4ifMK1e~wTiyhO81xVZZgWIdeMVGlHOtnJjhZhqnLwgPvrIAnMZ3fiyLTzmO~b-rXKskgAqDQbwkfBHlg1UpxJCqzYa-GNqgw9TPB98Kiw9csvp22xGuM4WCrXx-xsMwcO-XB6d--be-~PfGqr26yJ8-q9JH5-kWiZGYVJuvm6OpLI~BX04eDUDMWR22KFBQGu~d-A__" className="w-50 h-50 rounded-full object-cover"/>
                <p className='text-center pt-[10px]'>Tops</p>
            </div>
            <div>
                <img 
                src="https://s3-alpha-sig.figma.com/img/17cf/8c8c/22f41498c32e52147074593dd10ff92f?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=at9Qpwye7ZJUEF1vYAjS29ZyOHFKmgbyf-pus6fEzqBay3VRcX1J~zlt1Wqc3qiu0liB9vlf5rdDErYPyO7kK80B1L1SQcV48WKyCVK9LE4LPrZicFqsQh3h6XN4KCTyNUPnJOaQQh83pPOGKEOVxPajBgSSVfAFgbsiLkmRVN1mCHbihF0foFL46po874hKgEpE5mYPBeAgsvueRGByPfhkqRWBniiArwq7xVbZscvhwpkAso6yAj5G3TLgKydmuaOQGYkTb4Suwn2dAE-2uxFL5UohEcLC5HPdtMOOHkKasEI20c0xA14FLe57~lzxjHSEx092hCtN6C9W9WqUjQ__" className="w-50 h-50 rounded-full object-cover"/>

                 <p className='text-center pt-[10px]'>T-shirts</p>
            </div>
            
            <div>
             <img src="https://s3-alpha-sig.figma.com/img/f202/4e60/4a2d2032c46f72e06a7ffab80ad5f1ec?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNRokAnSkm2z9V0WQASGtueYQT1QF5dzbAxtII1SBtJpT5wBpObjkVt1Pvyd60L1IFfXhC9QJTl9~ah94usoQtVTU0WKDpZ3iTvtJ7zkebNnAQyWrD4UoY5PJTSy8-~0DdzkGa7HasoViptcYz3lfB2exXZGvR1Zg1pBnj~K7T78-xO-jFo3mw2E6CN~ARmDSgrfp3ICVpQyK-eVJwlyo7btFNUNLniR5OIrVT6YzP8hOkmnvl0Yn0wI1WzSaAqvU9h8jcaKzNDMAX9Fdi5LvHN8Lt41xBqOGsb85R-uRjfUvNhTheKMdsHupiXio0PKt4qxiwwVcw9XgGLiQIk2Kw__" className="w-50 h-50 rounded-full object-cover"/>
             <p className='text-center pt-[10px]'>Caps</p>
            </div> 
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/f2dd/d662/60b05095dc6e5e21264d8ebbc74df3ce?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OwOEGuUCz9rx13vOpuqXauxRuKrWBYZU0MJNrQ81hde327qQZf1XcBZgd4iUB-DcotzNar~tqPT2vvWh6TzGW0R3GgIYeaXJDYHwR5bdaZ-HUulyUhnWy6lWGvtQk0ndpjbqG43yrcjRJRKur4OgSHQJfadpkveo1JxZwBg50yaKdsSr7B1hwulFcAuRjRQwAGeGn26mmi9CiGZ~GzjY6ElGQ9xH1jkzBSjDg6kWftQ~JNlhgTj-kk7D9NGppyEyByI6Q2kiCnnf8WTBQYJB-8eE6ht0HeGSiwa~3WC8iin5zRsPGLHNWowVZTrql-ESs743Phl6lPOYdqZSAEmYnA__" className="w-50 h-50 rounded-full object-cover"/>
                <p className='text-center pt-[10px]'>Sandals</p>
            </div>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/6d73/360e/6bf4f5ef12e2a49e829a3ee830e58d20?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jDx-7IctfAFCuccRTuniyMIe8wpNTb89diGHsfl4bxgwKruXDfax6lLBg4o6vmp0Dbzp2zbRAVplqqc-zdLsJ~c4l8TxZLhyprP23pka1FBcopz~7FgVD6s1H2kBIkDawLx3-9tURPDU2s3V9zfobp~c-096zcyv0HT2ynP2Mqz9ZVbL55TW5kBk8JFESKlIKAvUtcvs58K3CrzwXa4feP7xvYGKTr~SfirT6TqVi06z6mPHhCx5KVe-NSqtjpLS69rNwtotjWeHohzQ9y7eptYrPFvtSqGmGetagFKScwoq~tidZetL6h8xMf9oGz8a~ha4pZ8cY5IvBQWW~lP0tw__" className="w-50 h-50 rounded-full object-cover"/>
                <p className='text-center pt-[10px]'>Jackets</p>
            </div>
           <div>
            <img src="https://s3-alpha-sig.figma.com/img/7921/62b1/ffa2bd4a98cd5732801b3a09088b1a99?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MERsNHcGh-KOVG-2cW05D8XxwG54yNCQ9HvNHEs4hgan8llg92SAYoTQxDd4KxwzL6zRC-1lx8nQFUG8cTFhWxCDXheVcq6UTW2MVGEZYYCn-Egn6X8QxYfKXAfemGzvMiQU3uWIXUJ4Q2kYRbKWnM4FFCc5QGUzAmOT34g-gGMcABlDjsI3Bmfi2StVRoY~9tKMJfZ~hw-UCV~nCf4hYD7Zr1jFxtxTIPNsfuZFt8fOJkmpCCjDfUWBDotmT6Fys0LD0N1HTsFYNtjqGmmjRBgVMVyNnVRmaQ~oQdBDD5xZXSTEH0cZK4CT-avDvblItJWNUKhW4Sxj3ZPROMpBfA__" className="w-50 h-50 rounded-full object-cover"/>
            <p className='text-center pt-[10px]'>Coats</p>
           </div>
        
        </div>
    </div>


    <div  className='container mx-[auto] max-w-[1140px]'>
        <div className='mb-[30px] '>
            <h1 className='font-bold text-[30px]'>Trending now</h1>
        </div>
        <div className='flex mx-[] justify-between gap-[10px]'>
           <div>
            <img src="https://s3-alpha-sig.figma.com/img/ad1d/d089/25e57878768e748a79d5fa2f9cf8af9f?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFM-B3GNvet-wiYNLpBtaLjdISUy-8qjG8L22BmnPw8lhOQIwvznv~cPL1Zn1-oyUyKf98Xaea94duN0lILctFW8BZZ5~-Wi-OLBihKQBzwMqEJvZbZYuGjge1ynSrqEtkSn~S8~CHQawTIoZ2fnizWpNUl4juJApHzxOQai89ORsmcDpg2YjBBOW0e60pQRs-EgdcnfHiWkKdDOCWcW0pQCHoNspuMPxwaUhNqK9N-NYpSAvBttJBIBRQ9m09trcVW6s3HdkjwoYQ-XWt4hN-Y7ouW8dAaujepsxo6BV4sDi7vuyb4fZP-fSTyHcKu62fPyiZmQSkTGay8SVgigwA__"/>
            <p className='text-[13px]'>Shirt with insertion lace trims</p>
            <p  className='font-bold'>$49.45</p>
           </div>
           <div>
            <img src="https://s3-alpha-sig.figma.com/img/b590/c7d0/696eeae21fb24e484f713d0b203d8ce5?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVM21JOHQkfd6Fr1ZHpZTwqW-mFQrCCC~6ofoT-3X7F8jN8pA17tkA2fOBRdFP21h8EKQ8FnxZ20UgceGE2MhGeX2sAG3m7v4EcAvRqlH6NzQDPUOLW2IVHos8pCmXbhV13X7JURkp~Uh~Ks4YEfdLdvEwGfxPr~DYqviQTX-r35RLowBU-eFUpYOIYicqOfw~qiyWF82oUW2bK1ErG7jNVoW73NqOZPuM4vqpV-aaZ2ft~3-0l1TY9nhp3N7fxjjT1erXd0yMNIHMV3hlnp9jQ0oS5kTASRksR6ohjje0icSFuzyHQgleOrG539wkk9D72BX~mFiWcvioKN6takJA__"/>
           <p className='text-[13px]'>  Chrono Watch with blue leather belt</p>
           <p className='font-bold'>$120.60</p>
           </div>
           <div>
            <img src="https://s3-alpha-sig.figma.com/img/d493/cc56/a4b3c43361879136d750cdb108945e55?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eI5CZ-zptjqTKiw~EXULOXhy0N5IVfQ--PzNknxaIx7QlBs0k2Cuvhe23riLVSrzg5oB95vB4Q~vVNxHPd1W6s7aBbiiwX8ZID5o7pcHq2PeGLSh4fXph3dSxWdFjdDQ4Day9QC8Ka6A1bxRBHUsC0wkUb6HDWoQZ45vVnZkxwiOjFtdGNfKtUsQKwR~VMuv2iwQd3BNi4OBJpXPd94qn-OgfxLrZ9pKXKO2XP271G5K4Yj99cbE3ehkHFuSvmtHeuVGMODam5pgiR8lfhmNleYXfKpV~j4AgvRTxqW5xX6~cLyJKeVr6tVYNUeDqL1X55LlU9JS7-14ID~cYQSv6Q__"/>
           <p className='text-[13px]'>Check coat with colour contrast</p>
           <p  className='font-bold'>$183.45</p>

           </div>
        </div>

    </div>

    <Salesproduct/>
    <div className='bg-[#1e212c] max-w-[1450px] h-[300px] flex mb-[50px]'> 
        <img src="https://s3-alpha-sig.figma.com/img/5942/6e5c/2d9dc20e6989b859f2ee75ddfc170ef4?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I80IwZudFqkU4zdSDDJWfL8NCm4xiE2E025mcunporF0PMSf3Tygekf2KP4JS84aQzJOPYWIcgpxPr-vKpp8rULeR8m9JRZOjRn95Yg51Ux2du8~vt~O9MUPBvHNKR8uTvfVglI6OPcixPK7d-MnEUz57BEfvBl18h80d6AO0YrLFwwfC53dXuroSQZEeAX5xfCoIwH79WEji981OKuYT~rUNBugxB98lrcPE5O4VkA2gBfzhnALmMWsg0gi-onnFU8UV5w4cU4wx62rYknJ6v-sS805rhq4GT-tm44QZQwGj4MtBfQ~SIhNgiLaIDFtQvd6G-q9dr7vtusMB6V54A__" className='w-[490px] h-[330px] ml-[207px]'/>
        {/* <p className='text-[#ffff]  my-[60px] text-[30px] w-[600px] h-[84px]'  >Enjoy mobile shopping with our Createx Store App!</p> */}
        <div className='flex flex-col'>
            <p className='text-[#ffff]  my-[60px] text-[30px] w-[600px] h-[84px]'  >Enjoy mobile shopping with our Createx Store App!</p>
           <div className='flex gap-[24px]'>
           <button className='bg-[#666] w-[110px] h-[48px] text-[#ffff] text-[12px] flex justify-center items-center'>   <FaApple className="text-[30px] ml-[4px]"/> Download on the Apple</button>
            <button className='bg-[#666] w-[110px] h-[48px] text-[12px] text-[#ffff]  flex justify-center items-center'><FaGooglePlay className="text-[30px] ml-[4px] "/>Get it on Google Play</button>
        </div>
           </div>

        
    </div>

    <div className=' mt-[200px] mx-[80px] mb-[200px] flex  justify-center items-center gap-[60px] text-[50px]'>
        <div className='flex flex-col justify-center items-center gap-[8px]'>
            <MdOutlineSupportAgent  className='text-[rgb(23,105,106)]'/>
            <h1 className='text-[20px] font-semibold '>Fast Worldwide Shipping</h1>
            <p className='text-[15px]'>Get free shipping over $250</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-[8px]'>
            <GrMoney className='text-[rgb(23,105,106)]' />
            <h1 className='text-[20px] font-semibold'>24/7 Customer Support</h1>
            <p className='text-[15px]'>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-[8px]'>
      
        <PiMoneyBold className='text-[rgb(23,105,106)]' />
            <h1 className='text-[20px] font-semibold'>Money Back Guarante</h1>
            <p className='text-[15px]'>We return money within 30 days</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-[8px]' >
        <MdOutlinePayment className='text-[rgb(23,105,106)]' />
            <h1 className='text-[20px] font-semibold'>Secure Online Payment</h1>
            <p className='text-[15px]'>Accept all major credit card</p>
        </div>
        
    </div>

    <div className='flex justify-evenly  '>
        <div className='flex flex-col gap-[8px]'>
            <p className='font-semibold'>Follow us on instagram</p>
            <h1 className='font-bold text-[30px]'>@CREATEX_STORE</h1>
            <button className='text-[rgb(23,105,106)] w-[172px] h-[30px] border-[1px] flex justify-center items-center gap-[5px] border-[rgb(23,105,106)]'>
<FaInstagram />
Follow Instagram</button>
        </div>
       
       <div className='flex gap-[10px]'>
       <img src="https://s3-alpha-sig.figma.com/img/b0d9/d2a8/b1887b1275c8bf8babe63f1022fc30e6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cNag3nlUwDY4z1l658h2Pwej9s~N6tulyhGzhlrARRKdM1l69bmER63-ZKhd9E1ZXOsbtE0arNrr9nvQolt42V6H8kNkg7HlWhELmQdZYsI~exE88~IxUWMhnPXh68hZUgXk7vZAHYTUOdrMRbn9L5UnCPJJncLotC1F70X8uxD9nOcXn6ZB5vhaClHaQ920093huQsfncQG633uMoqEAmLhK37Sepa3FEKLWhIThMm6QXCimLQCTcx7nK0JcfZ6kMDiuJc0ngG4zJ6JOloWozHq-lwXv~p453H72t~nYKryJIJ1OXsdQ82kB-5dwgDL6DNwwjD-nu0lyg19NdWdng__"/>
        
        <img src="https://s3-alpha-sig.figma.com/img/be0f/bb80/cc8e7eb6ea4f21db8b65335c270c80b6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyXVthpSjsLpP86VAu5Mjk0isDXHEwHlLAs7XkeDu1wZVRjBp83kkI1VdtVZ32D~qei~IwgEIw~9DeILmtlHJpz2YW8Daruxeq0U6Q6ewZZWaxlNOl76DUorXdgfQFcbz3LlJJ-QffAVA8wx6dR0zM2Mr6d3Sl4Xy5hDTu8AVVR6hbI47Trn7GAp9wG2sUVM1sxx39UR4zxgBca62821~E8qq8TKIvWyH4XgN7namZhtRJ3npA8Vq-s4zE8PvBt01pjJmyyQlLN7m1WpryCZJPqsiNj7aNTMKxp64NIYdysa9id8c3URV5Y7gnET13JY23RJyt-qd~xqx4udI4vrKw__"/>
        
        <img src="https://s3-alpha-sig.figma.com/img/360f/9a57/2354679aa361426ecb41cd51bee58f1b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOqpTntL6my50euGrJmEIHyN9AjQHEbRPNfA3tFYj7YrFqOTkiY5-hmE6E21icniuCdharZmDEjKPNaTZuoF9j9D-~N7zrycoTKjqrIpslnKEzJIhHfFCkYZTLRNNy2NCvHKmerYtxtRo0-NLW8crxFVhAzcys8Eudt3mkrZNioVZ2yWiPAZoJYLIoZs57tjhtSgeW5cNwAzi-T08Bw569VylBsGajzy~ZQCwDZNrdzSLeQeCF93QCkg8s7amI5BTUa~5Ol7WSf27I31bpJ-rl9qa4RkofQDPh7p5m11SrcS5Lregbb5Fx7WJoFG5cX7XzBTHkWBYqaqpD5Ez0pP9w__"/>
        
        

       </div>
       
        
    </div>
    

    <Blogcards/>
    <div >
        <div className='flex  gap-[20px] w-[10%] mx-[245px]'>
            <img src="https://s3-alpha-sig.figma.com/img/c5e5/b91c/105ec894eb955e978d7274a029dee59c?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4eNSpyqd6isysJJeBYZpkIzPeR4idq-FeOW8pODw18wbiEzL15oBAAXoF5d5SCuj-WiirszuLtxZIk0x~yF74hgb~K1KungLoMuteRfhPxPNjWWlqx-QBwobTYIFGPWm~c0VmJuw-4k4LmBKgf3iCeuQghpa0jlxRDXP3z~dGAPvxIw5lRi3I1NArZDIbcOPXWKlU46~Iep8sAtfGdU5WnAQIYZnOBrnJl2ibetF8fTt-QZiv5kBVXv5vviDO4bb3~UAEAyFz-XMbK6U1Fk0Q6cLoHpEDtABh1OYNljnP9i7u2mhx22RpibgI4ZA2BWuUIoD3Od8f9ni6Dcina2cw__"/>
        
            <img src="https://s3-alpha-sig.figma.com/img/a87b/fef2/d8e12e5fe4bd89f45142880d1a891387?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KZh2F269nfzdy1XC40ohiKKE0I3v033j-Bwn8LteQkmEYWbFMbpdLUgNsLyY~1U1qHUdkaVQ9mVHdADXCLSf1oxHFu63TGlGGn~yuXlfQl5dSWLJsA3xuYoVE2BBbXmm1wKyD7sfXSE4rPnnfrjGQs~Vy5rJJWetSk5U2AJu4VaOesXuKYzGdjtiuMgvyxpAMUq05B3SoxFLSgN9lD8n7L5pNDxJtbUzO-I2zvwETLjAHh5DNH2qnwLOQEX3o8VrTAyLIR13ck52js~1sXh-KVE2AJDGUD3yBEnCw8Vf9vQGRvwJcOMwBaVUWR9G0Nu-mhentzvQ2GZ2fjY64AfnXA__"/>
        
        <img src="https://s3-alpha-sig.figma.com/img/6350/0650/4a0304c6115a1fb006467546f1cf3e3f?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jHGcMjBVndw-WPvlbKvfiveccgIp9-spcjha6dXWlhISC~v25g8gWK~GW6xAkWIacaNzO0ZdiaAiIIABr0mQtm28110PXsWftpP5bN90oQxu9-51M0CaUucTDlAR5gMDzFmNJHZHvLo8x3fdA6256NROOna8Yvavaix-r7SjLx2VoT3l8kKT2ndqcvAW-RrHUy--6dtA7siqktrpNzI2CiTW2YVZ88a9sbpfTQWOIa2Yq3q4Q61T~w9ZA3TeZGyez71Num93Aytk1a8ONgAJII3eQdTcS3ovq3VAwtJqZBQe4ieV3K7LMy8Y90n3Ngf84p8Alz7IHTcO~W1~S9OTDg__"/>
        <img  src="https://s3-alpha-sig.figma.com/img/ef6f/f3a9/c646be90e59558dbc2a0d5a909d71e3d?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K9CtRMBwvYqfCwZklhmNbZtMzUUhL4~lRRTyhZEGLqFAbGSM26a7HArx9u3083k1as6gS9O3iQ29i7HDGf60YpT5~DcyOntTn6wOItLslRVY~HXmyzLlaoMxWMmeKZCYmCY6QUYml4idrk08oOcQRURziVQ55w-btAZ6oTWbW~EQ4MZXoH6nwkMZt4szKyA52jyrM5aYXQsfZp7~4E06Z2u4WP40KFAz52uIrlxneg6i3pMu8nlLEHpVohu5virFCn0hDEALbjRImKtxv--b7qFlxT6UIwQEtLF03300YpiNjdhHcqZ6QycjP3ZlXAB42E6OD0XUglzyFwLVdYwnPQ__"/>
        <img src="https://s3-alpha-sig.figma.com/img/c915/d6bd/459e74913fa7983d9c8d5f1a6e621339?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=psrFjHzyb4YfAGpf7EBBggHYDFPlGSvamYutwwZi05zKmvBIgjGz0nUhzZ8L6wV7~GmWMVtbikD5C~7SWBM5SbjByQCYA19kmePwkv2OEOxBId831ickrJqECGzOb5DRLPb3bmq8r6mg~mzi2kBgIzmWmwTOSYOhj6DAzEhmD3HmoxywV0KusIj6khJl7IJEE33-XzVyc2m8vTZ1oB1lZOANNSaVlzfojI2zOyCGWMoJELD3XrT7vf~yl5XHYEtHXH8flNOEQ67SvGjOmRBTZ3aXuxgbZmQDVG8N-iOMompUWP~7w83nM6ak9OmjmMSR-NXlfrR4cPH1U~oVkw61-g__"/>
        <img src="https://s3-alpha-sig.figma.com/img/a035/1348/9e601ba0def599626eff03116099d44d?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJp1pjQnsm3JuTJ3l46e6s8223hLHvt7GmQycqnWsdKtoLrWHuiZKFMVC3WLgIFs1OyDt3ZbectRGn63Ys~wdsFaWaAy-8d-aa6ByGwzVMaISS7fAJHbtiAaddggdjo7O8x9kbeE9ADE0r-g~ygSWGzvisB-uyTHyR1XAV0iTBWANeRkDp3zLugeWNT1c1XeH0mYthtURcnBWXrtcqT4rf2RWx~CmntCwdd-9chCgRwlxqxVIg~crqAJHUui2E2uJpwTizv6rKAp84-e~D9ZyoolLujIeHPzpYsuLGMkm-Y~kgUknA44ziNpz5kHTlgp5qtFXPrQSXemj1fhXQQAAA__"/>
        
        
        </div>
    </div>



</div>

       
    
  )
}

export default Home