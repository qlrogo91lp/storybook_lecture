import './App.css'
import Label from './components/Label'
import DefaultTextField from './components/DefaultTextField'
import { useState } from 'react'

function App() {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <>
      <Label htmlFor='email'>email</Label>
      <DefaultTextField
        id='email'
        iconPath='https://kr.object.ncloudstorage.com/gandi-cdn/svg/delete_dark%202.svg'
        iconAlt='delete'
        placeholder='이메일을 입력해주세요.'
        value=''
        errorMessage='이메일을 확인해주세요.'
        onChange={() => { }}
        onIconClick={() => { }}
        isError={isError}
      />
      <div className='mt-20' />
      <Label htmlFor='address'>address</Label>
      <DefaultTextField
        id='address'
        iconPath='https://kr.object.ncloudstorage.com/gandi-cdn/svg/delete_dark%202.svg'
        iconAlt='delete'
        placeholder='주 소를 입력해주세요.'
        value=''
        errorMessage='주소를 확인해주세요.'
        onChange={() => { }}
        onIconClick={() => { }}
        isError={isError}
      />
      <button onClick={() => setIsError((prev) => !prev)}>에러 토글</button>
    </>
  );
}

export default App
