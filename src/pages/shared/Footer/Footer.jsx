export default function Footer() {
  return (
    <div className="bg-[#191919] text-white py-12 px-4 md:px-0 mt-20">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-5 py-8">
          <div>
            <h1 className="text-2xl font-bold">RecruitHub</h1>
            <p className="mr-4 py-4 text-[#B5B5B5] ">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src="/public/Icons/Group 9969.png" alt="" />
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="py-4 text-[#B5B5B5]">
              <li>About Us</li>
              <li>Work</li>
              <li>Latest News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Product</h3>
            <ul className="py-4 text-[#B5B5B5]">
              <li>Prototype</li>
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Support</h3>
            <ul className="py-4 text-[#B5B5B5]">
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <ul className="py-4 text-[#B5B5B5]">
              <li>524 Broadway , NYC</li>
              <li>+1 777 - 978 - 5570</li>
            </ul>
          </div>
        </div>
        <div className="pb-8">
          <hr className=" border-6" />
        </div>
        <div className="flex justify-between pb-8 text-[#B5B5B5]">
          <p>@2023 CareerHub. All Rights Reserved</p>
          <p>Powered by CareerHub</p>
        </div>
      </div>
    </div>
  );
}
