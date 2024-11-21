
const Header: React.FC = () => {
  return (
    <header className="absolute flex justify-around items-center w-full p-4 text-white ">
        <h1 className='sm:text-3xl font-bold'>Panto</h1>

        <nav className='flex space-x-12 text-lg '>
            <p>Furnitire</p>
            <p>Shop</p>
            <p>About us</p>
            <p>Contact</p>
        </nav>

        <button>
            buy
        </button>
    </header>
  )
};

export default Header;
