import Header from "../Header"
import Footer from "../Footer"
import ProfileInfo from "../ProfileInfo"
import CartItem from "../CartItem"
// import { Link } from "react-router"
// const urlW3 = 'http://www.w3.org/2000/svg'

export default function Wishlist() {
    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>
            <main className="w-full grid justify-center item-center mx-auto mb-16">
                <section className="flex gap-8 py-8">
                    {/* LEFT PROFILE */}
                    <div className="flex flex-col gap-4 pb-0.5">
                        <ProfileInfo />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex min-w-125 flex-col items-start gap-4">
                        <h1 className="text-xl font-medium text-[#111827]">
                            Wishlist (2)
                        </h1>
                        <CartItem />
                    </div>
                </section>
            </main>
            <footer id="footer">
                <Footer />
            </footer>
        </>
    )
}