import './styles/global.css';

interface TextProps {
  size?: 'sm' | 'md' | 'lg';
}

export function App({size = 'md'}: TextProps){
  return (
   <span className="text-gray-100 font-sans">Hello World</span>
  )
}

