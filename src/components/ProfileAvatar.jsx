import { profileImage } from '../data/portfolio'

const sizeClasses = {
  sm: 'h-9 w-9 rounded-lg',
  md: 'h-28 w-28 rounded-2xl sm:h-32 sm:w-32',
  lg: 'h-40 w-40 rounded-2xl sm:h-44 sm:w-44',
}

export default function ProfileAvatar({ size = 'md', className = '' }) {
  return (
    <img
      src={profileImage}
      alt="Justin Kalule"
      className={`object-cover object-top ring-2 ring-flame-700 ${sizeClasses[size]} ${className}`}
    />
  )
}
