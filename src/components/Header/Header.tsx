
const Header: React.FC = () => {
  return (
    <header className="bg-transparent flex justify-around items-center w-full pt-8 text-white ">
        <h1 className='sm:text-3xl font-bold'>Panto</h1>

        <nav className='flex space-x-12 text-lg '>
            <p>Furniture</p>
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
