import React, { useState } from 'react';
import { Phone, Star, Award, Mail } from 'lucide-react';
import NavBar from '../NavBar';
// import logo from '../../assets/images/logoED.png';

export default function HomeHeroSection() {
  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    part: '',
    name: '',
    phone: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = async () => {
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!formData.name || !formData.phone || !formData.email) {
      setSubmitStatus('error');
      alert('Please fill in all required fields (Name, Phone, Email)');
      setIsSubmitting(false);
      return;
    }

    try {
      const serviceID = 'service_dcx6xug';
      const templateID = 'template_wtpuleq';
      const publicKey = 'VMJq2h4guP5mag8sP';

      // Make sure these template param names exactly match what your EmailJS template uses
      const templateParams = {
        // If you want to control recipient from code, set to_email and make your template's To Email = {{to_email}}
        to_email: 'ankitchandel858790@gmail.com',

        // Common placeholders (match your template)
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        year: formData.year,
        make: formData.make,
        model: formData.model,
        part: formData.part,

        // message used by template's {{message}}
        message: `Message from Enquery Form:
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Year: ${formData.year}
          Make: ${formData.make}
          Model: ${formData.model}
          Part: ${formData.part}`
      };

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      // Helpful logging for debugging delivery failures
      if (res.ok) {
        setSubmitStatus('success');
        alert('✅ Quote request submitted successfully! We will contact you soon.');
        setFormData({
          year: '',
          make: '',
          model: '',
          part: '',
          name: '',
          phone: '',
          email: ''
        });
      } else {
        // try to read error body for provider response
        const text = await res.text();
        console.error('EmailJS responded with non-OK:', res.status, text);
        setSubmitStatus('error');
        alert('❌ Failed to send request. Check console for EmailJS response.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      alert('❌ Failed to send request. Please try calling us directly at +1 (201) 201-1781');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    sendEmail();
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  const categories = [
    {
      title: 'Used Engine',
      image: '🔧',
      description: 'High-quality tested engines'
    },
    {
      title: 'Used Transmission',
      image: '⚙️',
      description: 'Reliable transmissions'
    },
    {
      title: 'Used Transfer Case',
      image: '🔩',
      description: 'Premium transfer cases'
    },
    {
      title: 'Used Steering Column',
      image: '🎮',
      description: 'Quality steering parts'
    }
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">


      {/* Hero Section */}
      <div className="relative py-16 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="w-[90%] m-auto  grid lg:grid-cols-2 gap-8 items-center">
            
           

            {/* Left Side Content */}
            <div className="space-y-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-4xl font-bold mb-4 leading-tight">
                  GET THE BEST DEALS ON USED ENGINES & TRANSMISSIONS IN
                </h1>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow-lg text-center transform hover:scale-105 transition w-[180px] h-[180px] flex justify-center items-center rounded-full">
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">G</span>
                      </div>
                    </div>
                    <div className="font-bold text-gray-900">4.8 rating</div>
                    <div className="text-xs text-gray-600">from 687 Reviews</div>
                  </div>
                </div>

                <div className="bg-white p-4 shadow-lg text-center transform hover:scale-105 transition w-[180px] h-[180px] flex justify-center items-center rounded-full">
                  <div>
                  <Star className="w-8 h-8 mx-auto mb-2 text-green-600 fill-current" />
                  <div className="font-bold text-gray-900">TrustScore 4.9</div>
                  <div className="text-xs text-gray-600">from Reviews 1,232</div>
                  </div>
                </div>

                <div className="bg-white p-4 shadow-lg text-center transform hover:scale-105 transition w-[180px] h-[180px] flex justify-center items-center rounded-full">
                  <div>
                  <Award className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="font-bold text-gray-900">A+ BBB Rating</div>
                  <div className="text-xs text-gray-600">4.86/5 Customer Rating</div>
                  </div>
                </div>
              </div>

             

              {/* Product Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg text-center transform hover:scale-105 hover:shadow-xl transition cursor-pointer"
                  >
                    <div className="text-5xl mb-3">{category.image}</div>
                    <div className="font-bold text-gray-900 text-sm mb-1">{category.title}</div>
                    <div className="text-xs text-gray-600">{category.description}</div>
                  </div>
                ))}
              </div>
             
            </div>
             {/* Quote Form */}
              <div className='outerhead'>
                {/* Phone CTA */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-3 mb-3 shadow-2xl flex items-center gap-4 transform hover:scale-105 transition">
                  <div className="bg-white rounded-full p-4">
                    <Phone className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-white">
                    <div className="text-3xl font-bold">+1 (201) 201-1781</div>
                    <div className="text-sm opacity-90">Call us now for instant quote</div>
                  </div>
                </div>
            
                <div className="bg-gradient-to-br from-red-600 via-orange-800 to-red-500 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    YOUR FREE QUOTE FOR AUTO PARTS IN DELHI!
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <select
                        value={formData.year}
                        onChange={(e) => handleChange('year', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white text-gray-800 focus:border-gray-900 focus:outline-none transition"
                      >
                        <option value="" selected="selected">- Select Year -</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                        <option value="1929">1929</option>
                        <option value="1928">1928</option>
                        <option value="1927">1927</option>
                        <option value="1926">1926</option>
                        <option value="1925">1925</option>
                        <option value="1924">1924</option>
                        <option value="1923">1923</option>
                        <option value="1922">1922</option>
                        <option value="1921">1921</option>
                        <option value="1920">1920</option>
                        <option value="1919">1919</option>
                        <option value="1918">1918</option>
                        <option value="1917">1917</option>
                        <option value="1916">1916</option>
                        <option value="1915">1915</option>
                        <option value="1914">1914</option>
                        <option value="1913">1913</option>
                        <option value="1912">1912</option>
                        <option value="1911">1911</option>
                        <option value="1910">1910</option>
                        <option value="1909">1909</option>
                        <option value="1908">1908</option>
                        <option value="1907">1907</option>
                        <option value="1906">1906</option>
                        <option value="1905">1905</option>
                        <option value="1904">1904</option>
                        <option value="1903">1903</option>
                        <option value="1902">1902</option>
                        <option value="1901">1901</option>
                      </select>

                      <select
                        value={formData.make}
                        onChange={(e) => handleChange('make', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white text-gray-800 focus:border-gray-900 focus:outline-none transition"
                      >
                        <option value="">- Select Make -</option>

                        <option value="Acura">Acura</option>
                        <option value="Alfa">Alfa</option>
                        <option value="AMC">AMC</option>
                        <option value="Audi">Audi</option>
                        <option value="Bentley">Bentley</option>
                        <option value="BMW">BMW</option>
                        <option value="Buick">Buick</option>
                        <option value="Cadillac">Cadillac</option>
                        <option value="Chevy">Chevy</option>
                        <option value="Chrysler">Chrysler</option>
                        <option value="Daewoo">Daewoo</option>
                        <option value="Daihatsu">Daihatsu</option>
                        <option value="Dodge">Dodge</option>
                        <option value="Eagle">Eagle</option>
                        <option value="Ferrari">Ferrari</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Ford">Ford</option>
                        <option value="Geo">Geo</option>
                        <option value="GMC">GMC</option>
                        <option value="Honda">Honda</option>
                        <option value="Hummer">Hummer</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Infiniti">Infiniti</option>
                        <option value="International">International</option>
                        <option value="Isuzu">Isuzu</option>
                        <option value="Jaguar">Jaguar</option>
                        <option value="Jeep">Jeep</option>
                        <option value="Kia">Kia</option>
                        <option value="LandRover">LandRover</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Lincoln">Lincoln</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Mercury">Mercury</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Oldsmobile">Oldsmobile</option>
                        <option value="Peugot">Peugot</option>
                        <option value="Plymouth">Plymouth</option>
                        <option value="Pontiac">Pontiac</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Saab">Saab</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Scion">Scion</option>
                        <option value="Sterling">Sterling</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Volkswagon">Volkswagon</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Yugo">Yugo</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <select
                        value={formData.model}
                        onChange={(e) => handleChange('model', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white text-gray-800 focus:border-gray-900 focus:outline-none transition"
                      >
                        <option value="">- Select Model -</option>
                        <option value="model1">Any</option>
                      </select>

                      <select
                        value={formData.part}
                        onChange={(e) => handleChange('part', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white text-gray-800 focus:border-gray-900 focus:outline-none transition"
                      >
                        <option value="0">- Select Part -</option>
                          <option value="Engine">Engine</option>
                          <option value="Transmission">Transmission</option>
                          <option value="Transfer Case">Transfer Case</option>
                          <option value="Steering Column">Steering Column</option>
                          <option value="Instrument Cluster">Instrument Cluster</option>
                          <option value="Drive Shaft">Drive Shaft</option>
                          <option value="Airbag">Airbag</option>
                          <option value="Differential">Differential</option>

                          <option value="A Pillar">A Pillar</option>
                          <option value="A Pillar Trim">A Pillar Trim</option>
                          <option value="A/C Bracket">A/C Bracket</option>
                          <option value="A/C Compressor">A/C Compressor</option>
                          <option value="A/C Compressor Clutch Only">A/C Compressor Clutch Only</option>
                          <option value="A/C Condenser">A/C Condenser</option>
                          <option value="A/C Condenser Fan">A/C Condenser Fan</option>
                          <option value="A/C Control Computer">A/C Control Computer</option>
                          <option value="A/C Evaporator">A/C Evaporator</option>
                          <option value="A/C Evaporator Housing only">A/C Evaporator Housing only</option>
                          <option value="A/C Heater Control (see also Radio or TV Screen)">A/C Heater Control (see also Radio or TV Screen)</option>
                          <option value="A/C Hose">A/C Hose</option>
                          <option value="A/C Wiring Harness">A/C Wiring Harness</option>
                          <option value="Accelerator Cable">Accelerator Cable</option>
                          <option value="Accelerator Parts">Accelerator Parts</option>
                          <option value="Adaptive Cruise Projector">Adaptive Cruise Projector</option>
                          <option value="Air Bag">Air Bag</option>
                          <option value="Air Bag Clockspring">Air Bag Clockspring</option>
                          <option value="Air Bag Ctrl Module">Air Bag Ctrl Module</option>
                          <option value="Air Box/Air Cleaner">Air Box/Air Cleaner</option>
                          <option value="Air Cond./Heater Vents">Air Cond./Heater Vents</option>
                          <option value="Air Flow Meter">Air Flow Meter</option>
                          <option value="Air Pump">Air Pump</option>
                          <option value="Air Ride Compressor">Air Ride Compressor</option>
                          <option value="Air Shutter">Air Shutter</option>
                          <option value="Air Tube/Resonator">Air Tube/Resonator</option>
                          <option value="Alternator">Alternator</option>
                          <option value="Alternator Bracket">Alternator Bracket</option>
                          <option value="Amplifier/Radio">Amplifier/Radio</option>
                          <option value="Antenna">Antenna</option>
                          <option value="Anti-Lock Brake Computer">Anti-Lock Brake Computer</option>
                          <option value="Anti-Lock Brake Pump">Anti-Lock Brake Pump</option>
                          <option value="Armrest">Armrest</option>
                          <option value="Ash Tray/Lighter">Ash Tray/Lighter</option>
                          <option value="Audiovisual (A/V) (see also TV Screen)">Audiovisual (A/V) (see also TV Screen)</option>
                          <option value="Automatic Headlight Dimmer">Automatic Headlight Dimmer</option>
                          <option value="Auto. Trans. Cooler">Auto. Trans. Cooler</option>
                          <option value="Axle Actuator (4WD)">Axle Actuator (4WD)</option>
                          <option value="Axle Assy Fr (4WD w. Housing)">Axle Assy Fr (4WD w. Housing)</option>
                          <option value="Axle Assy Rear (w. Housing)">Axle Assy Rear (w. Housing)</option>
                          <option value="Axle Beam Front (2WD, incl I Beam Susp)">Axle Beam Front (2WD, incl I Beam Susp)</option>
                          <option value="Axle Beam Rear (FWD)">Axle Beam Rear (FWD)</option>
                          <option value="Axle Flange">Axle Flange</option>
                          <option value="Axle Housing Only">Axle Housing Only</option>
                          <option value="Axle Shaft">Axle Shaft</option>
                          <option value="B Pillar Trim">B Pillar Trim</option>
                          <option value="Back Door (above rear bumper)">Back Door (above rear bumper)</option>
                          <option value="Back Door Glass">Back Door Glass</option>
                          <option value="Back Door Handle, Inside">Back Door Handle, Inside</option>
                          <option value="Back Door Handle, Outside">Back Door Handle, Outside</option>
                          <option value="Back Door Hinge">Back Door Hinge</option>
                          <option value="Back Door Moulding">Back Door Moulding</option>
                          <option value="Back Door Shell">Back Door Shell</option>
                          <option value="Back Door Trim Panel">Back Door Trim Panel</option>
                          <option value="Back Glass">Back Glass</option>
                          <option value="Back Glass Regulator">Back Glass Regulator</option>
                          <option value="Back Glass Shock">Back Glass Shock</option>
                          <option value="Backing Plate, Front">Backing Plate, Front</option>
                          <option value="Backing Plate, Rear">Backing Plate, Rear</option>
                          <option value="Backup Camera">Backup Camera</option>
                          <option value="Backup Light">Backup Light</option>
                          <option value="Battery">Battery</option>
                          <option value="Battery Cable">Battery Cable</option>
                          <option value="Battery Terminal">Battery Terminal</option>
                          <option value="Battery Tray">Battery Tray</option>
                          <option value="Bed, Pickup">Bed, Pickup</option>
                          <option value="Bed Floor (Pickup)">Bed Floor (Pickup)</option>
                          <option value="Bed Front Panel (Pickup)">Bed Front Panel (Pickup)</option>
                          <option value="Bed Liner">Bed Liner</option>
                          <option value="Bed Side, Pickup">Bed Side, Pickup</option>
                          <option value="Bell Housing">Bell Housing</option>
                          <option value="Belt Tensioner">Belt Tensioner</option>
                          <option value="Blind Spot Camera">Blind Spot Camera</option>
                          <option value="Blower Motor">Blower Motor</option>
                          <option value="Body Wiring Harness">Body Wiring Harness</option>
                          <option value="Brake/Clutch Pedal">Brake/Clutch Pedal</option>
                          <option value="Brake Booster">Brake Booster</option>
                          <option value="Brake Proportioning Valve">Brake Proportioning Valve</option>
                          <option value="Brake Rotor/Drum, Front">Brake Rotor/Drum, Front</option>
                          <option value="Brake Rotor/Drum, Rear">Brake Rotor/Drum, Rear</option>
                          <option value="Brake Shoes/Pads">Brake Shoes/Pads</option>
                          <option value="Brush Guard">Brush Guard</option>
                          <option value="Bug Screen">Bug Screen</option>
                          <option value="Bumper Assy (Front) includes cover">Bumper Assy (Front) includes cover</option>
                          <option value="Bumper Assy (Rear) includes cover">Bumper Assy (Rear) includes cover</option>
                          <option value="Bumper Bracket (Misc)">Bumper Bracket (Misc)</option>
                          <option value="Bumper Cover (Front)">Bumper Cover (Front)</option>
                          <option value="Bumper Cover (Rear)">Bumper Cover (Rear)</option>
                          <option value="Bumper End Cap">Bumper End Cap</option>
                          <option value="Bumper Energy Absorber (Front)">Bumper Energy Absorber (Front)</option>
                          <option value="Bumper Energy Absorber (Rear)">Bumper Energy Absorber (Rear)</option>
                          <option value="Bumper Face Bar (Front)">Bumper Face Bar (Front)</option>
                          <option value="Bumper Face Bar (Rear)">Bumper Face Bar (Rear)</option>
                          <option value="Bumper Filler Panel">Bumper Filler Panel</option>
                          <option value="Bumper Guard (Front)">Bumper Guard (Front)</option>
                          <option value="Bumper Guard (Rear)">Bumper Guard (Rear)</option>
                          <option value="Bumper Impact Strip">Bumper Impact Strip</option>
                          <option value="Bumper Reinforcement (Front)">Bumper Reinforcement (Front)</option>
                          <option value="Bumper Reinforcement (Rear)">Bumper Reinforcement (Rear)</option>
                          <option value="Bumper Shock">Bumper Shock</option>
                          <option value="Bumper Step Pad">Bumper Step Pad</option>
                          <option value="C Pillar Trim">C Pillar Trim</option>
                          <option value="Cab">Cab</option>
                          <option value="Cab Back Panel">Cab Back Panel</option>
                          <option value="Cab Clip, no cowl">Cab Clip, no cowl</option>
                          <option value="Cab Corner">Cab Corner</option>
                          <option value="Cabin Air Filter">Cabin Air Filter</option>
                          <option value="Cabin Fuse Box">Cabin Fuse Box</option>
                          <option value="Caliper">Caliper</option>
                          <option value="Camera Projector">Camera Projector</option>
                          <option value="Camshaft">Camshaft</option>
                          <option value="Camshaft Housing">Camshaft Housing</option>
                          <option value="Carburetor (see also Throttle Body)">Carburetor (see also Throttle Body)</option>
                          <option value="Cargo Cover/Shade">Cargo Cover/Shade</option>
                          <option value="Cargo Lamp">Cargo Lamp</option>
                          <option value="Carpet">Carpet</option>
                          <option value="Carrier (see also Differential)">Carrier (see also Differential)</option>
                          <option value="Carrier Case">Carrier Case</option>
                          <option value="CD Player/Radio">CD Player/Radio</option>
                          <option value="Center Cap (Wheel)">Center Cap (Wheel)</option>
                          <option value="Center Pillar">Center Pillar</option>
                          <option value="Charging Port Door Assembly">Charging Port Door Assembly</option>
                          <option value="Chassis Control Computer (not Engine)">Chassis Control Computer (not Engine)</option>
                          <option value="Clock">Clock</option>
                          <option value="Clockspring (Air Bag)">Clockspring (Air Bag)</option>
                          <option value="Clutch Cable">Clutch Cable</option>
                          <option value="Clutch Disc">Clutch Disc</option>
                          <option value="Clutch Fork">Clutch Fork</option>
                          <option value="Clutch Master Cylinder">Clutch Master Cylinder</option>
                          <option value="Coil/Air Spring">Coil/Air Spring</option>
                          <option value="Coil/Igniter">Coil/Igniter</option>
                          <option value="Column Switch">Column Switch</option>
                          <option value="Computer Box Engine">Computer Box Engine</option>
                          <option value="Computer Box Not Engine">Computer Box Not Engine</option>
                          <option value="Condenser">Condenser</option>
                          <option value="Condenser/Radiator mtd. Cooling Fan">Condenser/Radiator mtd. Cooling Fan</option>
                          <option value="Connecting Rod, Engine">Connecting Rod, Engine</option>
                          <option value="Console, Front">Console, Front</option>
                          <option value="Console, Rear">Console, Rear</option>
                          <option value="Control Arm, Front Lower">Control Arm, Front Lower</option>
                          <option value="Control Arm, Front Upper">Control Arm, Front Upper</option>
                          <option value="Control Arm, Rear Lower">Control Arm, Rear Lower</option>
                          <option value="Control Arm, Rear Upper">Control Arm, Rear Upper</option>
                          <option value="Convertible Top">Convertible Top</option>
                          <option value="Convertible Top Boot">Convertible Top Boot</option>
                          <option value="Convertible Top Lift">Convertible Top Lift</option>
                          <option value="Convertible Top Motor">Convertible Top Motor</option>
                          <option value="Convertible Windscreen">Convertible Windscreen</option>
                          <option value="Coolant Pump">Coolant Pump</option>
                          <option value="Cooling Fan (Rad and Con mtd.)">Cooling Fan (Rad and Con mtd.)</option>
                          <option value="Core (Radiator) Support">Core (Radiator) Support</option>
                          <option value="Cowl">Cowl</option>
                          <option value="Cowl Vent Panel">Cowl Vent Panel</option>
                          <option value="Crank Pulley (Harmonic Balancer)">Crank Pulley (Harmonic Balancer)</option>
                          <option value="Crankshaft">Crankshaft</option>
                          <option value="Cruise Control Computer">Cruise Control Computer</option>
                          <option value="Cruise Control Servo/Regulator">Cruise Control Servo/Regulator</option>
                          <option value="Cruise Speed Controler">Cruise Speed Controler</option>
                          <option value="Cylinder Head (Engine)">Cylinder Head (Engine)</option>
                          <option value="D Pillar">D Pillar</option>
                          <option value="Dash/Interior/Seat Switch">Dash/Interior/Seat Switch</option>
                          <option value="Dash Bezel (see also Instrument or Radio Bezel)">Dash Bezel (see also Instrument or Radio Bezel)</option>
                          <option value="Dash Pad">Dash Pad</option>
                          <option value="Dash Panel">Dash Panel</option>
                          <option value="Dash Wiring Harness">Dash Wiring Harness</option>
                          <option value="Deck Lid Assembly">Deck Lid Assembly</option>
                          <option value="Deck Lid/Trunk Lid Shell">Deck Lid/Trunk Lid Shell</option>
                          <option value="Diesel Particulate Filter">Diesel Particulate Filter</option>
                          <option value="Differential Assembly (see also Carrier)">Differential Assembly (see also Carrier)</option>
                          <option value="Differential Case Only">Differential Case Only</option>
                          <option value="Differential Flange Only">Differential Flange Only</option>
                          <option value="Distributor">Distributor</option>
                          <option value="Door Back (door above rear bumper)">Door Back (door above rear bumper)</option>
                          <option value="Door Front">Door Front</option>
                          <option value="Door Handle, Inside">Door Handle, Inside</option>
                          <option value="Door Handle, Outside">Door Handle, Outside</option>
                          <option value="Door Lock Striker">Door Lock Striker</option>
                          <option value="Door Mirror Cover">Door Mirror Cover</option>
                          <option value="Door Outer Repair Panel, Back">Door Outer Repair Panel, Back</option>
                          <option value="Door Outer Repair Panel, Front">Door Outer Repair Panel, Front</option>
                          <option value="Door Outer Repair Panel, Rear">Door Outer Repair Panel, Rear</option>
                          <option value="Door Rear (side of vehicle)">Door Rear (side of vehicle)</option>
                          <option value="Door Shell, Back">Door Shell, Back</option>
                          <option value="Door Shell, Front">Door Shell, Front</option>
                          <option value="Door Shell, Rear">Door Shell, Rear</option>
                          <option value="Door Window Crank Handle">Door Window Crank Handle</option>
                          <option value="Drag Link">Drag Link</option>
                          <option value="Drive-By-Wire">Drive-By-Wire</option>
                          <option value="Drive Shaft, Front">Drive Shaft, Front</option>
                          <option value="Drive Shaft, Rear">Drive Shaft, Rear</option>
                          <option value="Driving Lamp Bezel">Driving Lamp Bezel</option>
                          <option value="EGR Valve">EGR Valve</option>
                          <option value="Electric Door Motor (not Window)">Electric Door Motor (not Window)</option>
                          <option value="Electric Window Motor">Electric Window Motor</option>
                          <option value="Electrical Part Misc">Electrical Part Misc</option>
                          <option value="Electronic Transmission Shifter">Electronic Transmission Shifter</option>
                          <option value="Emblem">Emblem</option>
                          <option value="Emergency Brake">Emergency Brake</option>
                          <option value="Engine">Engine</option>
                          <option value="Engine Block">Engine Block</option>
                          <option value="Engine Computer">Engine Computer</option>
                          <option value="Engine Core">Engine Core</option>
                          <option value="Engine Cover">Engine Cover</option>
                          <option value="Engine Cradle">Engine Cradle</option>
                          <option value="Engine Cylinder Head">Engine Cylinder Head</option>
                          <option value="Engine Fuse Box">Engine Fuse Box</option>
                          <option value="Engine Mounts">Engine Mounts</option>
                          <option value="Engine Oil Pan">Engine Oil Pan</option>
                          <option value="Engine Wiring Harness">Engine Wiring Harness</option>
                          <option value="Exhaust Assembly">Exhaust Assembly</option>
                          <option value="Exhaust Cross Pipe">Exhaust Cross Pipe</option>
                          <option value="Exhaust Fluid Pump">Exhaust Fluid Pump</option>
                          <option value="Exhaust Fluid Tank">Exhaust Fluid Tank</option>
                          <option value="Exhaust Heat Shield">Exhaust Heat Shield</option>
                          <option value="Exhaust Lead Pipe">Exhaust Lead Pipe</option>
                          <option value="Exhaust Manifold">Exhaust Manifold</option>
                          <option value="Exhaust Muffler">Exhaust Muffler</option>
                          <option value="Exhaust Pipe">Exhaust Pipe</option>
                          <option value="Exhaust Resonator">Exhaust Resonator</option>
                          <option value="Exhaust Tail Pipe">Exhaust Tail Pipe</option>
                          <option value="Fan Blade">Fan Blade</option>
                          <option value="Fan Clutch">Fan Clutch</option>
                          <option value="Fender">Fender</option>
                          <option value="Fender Extension/Flare">Fender Extension/Flare</option>
                          <option value="Fender Inner Panel">Fender Inner Panel</option>
                          <option value="Fender Moulding">Fender Moulding</option>
                          <option value="Fender Skirt">Fender Skirt</option>
                          <option value="Fender/Wheelhouse Inner Liner">Fender/Wheelhouse Inner Liner</option>
                          <option value="Flex Plate">Flex Plate</option>
                          <option value="Floor Mats">Floor Mats</option>
                          <option value="Floor Pan">Floor Pan</option>
                          <option value="Floor Shift Assembly">Floor Shift Assembly</option>
                          <option value="Flywheel">Flywheel</option>
                          <option value="Fog Lamp">Fog Lamp</option>
                          <option value="Fog Lamp Bezel">Fog Lamp Bezel</option>
                          <option value="Fog Lamp Bracket">Fog Lamp Bracket</option>
                          <option value="Fog Lamp Rear">Fog Lamp Rear</option>
                          <option value="Fog Lamp Switch">Fog Lamp Switch</option>
                          <option value="Frame">Frame</option>
                          <option value="Frame Front Section Only">Frame Front Section Only</option>
                          <option value="Frame Horn">Frame Horn</option>
                          <option value="Frame Upper &amp; Lower Rails">Frame Upper &amp; Lower Rails</option>
                          <option value="Front Axle Assembly (4WD w Housing)">Front Axle Assembly (4WD w Housing)</option>
                          <option value="Front Axle Beam (2WD, incl I Beam Susp)">Front Axle Beam (2WD, incl I Beam Susp)</option>
                          <option value="Front Axle Shaft">Front Axle Shaft</option>
                          <option value="Front Bumper Assembly (includes cover)">Front Bumper Assembly (includes cover)</option>
                          <option value="Front Bumper Cover">Front Bumper Cover</option>
                          <option value="Front Bumper Face Bar">Front Bumper Face Bar</option>
                          <option value="Front Bumper Guard">Front Bumper Guard</option>
                          <option value="Front Bumper Reinforcement">Front Bumper Reinforcement</option>
                          <option value="Front Console">Front Console</option>
                          <option value="Front Door">Front Door</option>
                          <option value="Front Door Glass">Front Door Glass</option>
                          <option value="Front Door Handle, Inside">Front Door Handle, Inside</option>
                          <option value="Front Door Handle, Outside">Front Door Handle, Outside</option>
                          <option value="Front Door Hinge">Front Door Hinge</option>
                          <option value="Front Door Mirror">Front Door Mirror</option>
                          <option value="Front Door Mirror Glass">Front Door Mirror Glass</option>
                          <option value="Front Door Moulding">Front Door Moulding</option>
                          <option value="Front Door Regulator">Front Door Regulator</option>
                          <option value="Front Door Shell">Front Door Shell</option>
                          <option value="Front Door Switch">Front Door Switch</option>
                          <option value="Front Door Trim Panel">Front Door Trim Panel</option>
                          <option value="Front Door Vent Glass">Front Door Vent Glass</option>
                          <option value="Front Door Vent Glass Regulator">Front Door Vent Glass Regulator</option>
                          <option value="Front Door Window Motor">Front Door Window Motor</option>
                          <option value="Front Drive Shaft">Front Drive Shaft</option>
                          <option value="Front End Assembly (Nose)">Front End Assembly (Nose)</option>
                          <option value="Front Seat Belt Assembly">Front Seat Belt Assembly</option>
                          <option value="Front Valance">Front Valance</option>
                          <option value="Front Window Regulator">Front Window Regulator</option>
                          <option value="Fuel Cap">Fuel Cap</option>
                          <option value="Fuel Cell">Fuel Cell</option>
                          <option value="Fuel Cooler">Fuel Cooler</option>
                          <option value="Fuel Distributor (&amp; Misc. Injection)">Fuel Distributor (&amp; Misc. Injection)</option>
                          <option value="Fuel Filler Door">Fuel Filler Door</option>
                          <option value="Fuel Filler Neck">Fuel Filler Neck</option>
                          <option value="Fuel Gauge">Fuel Gauge</option>
                          <option value="Fuel Injector (&amp; Misc. Injection)">Fuel Injector (&amp; Misc. Injection)</option>
                          <option value="Fuel Injector Pump">Fuel Injector Pump</option>
                          <option value="Fuel Line">Fuel Line</option>
                          <option value="Fuel Pump">Fuel Pump</option>
                          <option value="Fuel Rail (&amp; Misc. Injection)">Fuel Rail (&amp; Misc. Injection)</option>
                          <option value="Fuel Tank">Fuel Tank</option>
                          <option value="Fuel Tank Sending Unit">Fuel Tank Sending Unit</option>
                          <option value="Fuse Box (Cabin)">Fuse Box (Cabin)</option>
                          <option value="Fuse Box (Engine)">Fuse Box (Engine)</option>
                          <option value="Gas Cap">Gas Cap</option>
                          <option value="Gas Tank">Gas Tank</option>
                          <option value="Gate Interior Trim Panel">Gate Interior Trim Panel</option>
                          <option value="Gate Window Regulator">Gate Window Regulator</option>
                          <option value="Gate/Lid">Gate/Lid</option>
                          <option value="Gauge (Misc)">Gauge (Misc)</option>
                          <option value="Generator">Generator</option>
                          <option value="Glass, Back">Glass, Back</option>
                          <option value="Glass, Front Door">Glass, Front Door</option>
                          <option value="Glass, Front Vent">Glass, Front Vent</option>
                          <option value="Glass, Quarter Window">Glass, Quarter Window</option>
                          <option value="Glass, Rear Door">Glass, Rear Door</option>
                          <option value="Glass, Rear Vent">Glass, Rear Vent</option>
                          <option value="Glass, Special (see also Sunroof/TTop)">Glass, Special (see also Sunroof/TTop)</option>
                          <option value="Glass, Windshield">Glass, Windshield</option>
                          <option value="Glove Box">Glove Box</option>
                          <option value="GPS Screen (see also Radio or Heater/AC Control)">GPS Screen (see also Radio or Heater/AC Control)</option>
                          <option value="Grille">Grille</option>
                          <option value="Grille Moulding">Grille Moulding</option>
                          <option value="Grille Surround">Grille Surround</option>
                          <option value="Harmonic Balancer (Crank Pulley)">Harmonic Balancer (Crank Pulley)</option>
                          <option value="Hatch/Trunk Lid">Hatch/Trunk Lid</option>
                          <option value="Head (Cylinder)">Head (Cylinder)</option>
                          <option value="Header Panel">Header Panel</option>
                          <option value="Headlight Assembly">Headlight Assembly</option>
                          <option value="Headlight Ballast">Headlight Ballast</option>
                          <option value="Headlight Bracket">Headlight Bracket</option>
                          <option value="Headlight Bucket">Headlight Bucket</option>
                          <option value="Headlight Bulb">Headlight Bulb</option>
                          <option value="Headlight Cover (Plastic)">Headlight Cover (Plastic)</option>
                          <option value="Headlight Door">Headlight Door</option>
                          <option value="Headlight Housing">Headlight Housing</option>
                          <option value="Headlight Igniter">Headlight Igniter</option>
                          <option value="Headlight Lens">Headlight Lens</option>
                          <option value="Headlight Motor">Headlight Motor</option>
                          <option value="Headlight Switch (Column Mounted)">Headlight Switch (Column Mounted)</option>
                          <option value="Headlight Switch (Dash Mounted)">Headlight Switch (Dash Mounted)</option>
                          <option value="Headlight Switch (see also Column Switch)">Headlight Switch (see also Column Switch)</option>
                          <option value="Headlight Washer Motor Only">Headlight Washer Motor Only</option>
                          <option value="Headlight Wiper Motor Only">Headlight Wiper Motor Only</option>
                          <option value="Headliner">Headliner</option>
                          <option value="Headrest">Headrest</option>
                          <option value="Heads Up Display">Heads Up Display</option>
                          <option value="Heater Assy">Heater Assy</option>
                          <option value="Heater Core">Heater Core</option>
                          <option value="Heater Motor">Heater Motor</option>
                          <option value="Heater/AC Control (see also Radio or TV Screen)">Heater/AC Control (see also Radio or TV Screen)</option>
                          <option value="Hood">Hood</option>
                          <option value="Hood Deflector">Hood Deflector</option>
                          <option value="Hood Hinge">Hood Hinge</option>
                          <option value="Hood Insulation Pad">Hood Insulation Pad</option>
                          <option value="Hood Latch">Hood Latch</option>
                          <option value="Hood Ornament">Hood Ornament</option>
                          <option value="Hood Prop">Hood Prop</option>
                          <option value="Hood Scoop">Hood Scoop</option>
                          <option value="Hood Shock">Hood Shock</option>
                          <option value="Horn">Horn</option>
                          <option value="Hub">Hub</option>
                          <option value="Hub Cap/Wheel Cover (display w image)">Hub Cap/Wheel Cover (display w image)</option>
                          <option value="Hub Cap/Wheel Cover (display w/o image)">Hub Cap/Wheel Cover (display w/o image)</option>
                          <option value="Hub, Lockout (4WD)">Hub, Lockout (4WD)</option>
                          <option value="HVAC Actuator">HVAC Actuator</option>
                          <option value="Hybrid Converter/Inverter">Hybrid Converter/Inverter</option>
                          <option value="Idler Arm">Idler Arm</option>
                          <option value="Ignition Module (see also Ignitor/Coil)">Ignition Module (see also Ignitor/Coil)</option>
                          <option value="Ignition Switch">Ignition Switch</option>
                          <option value="Ignitor/Coil">Ignitor/Coil</option>
                          <option value="Info Screen (see also Radio or Heater/AC Control)">Info Screen (see also Radio or Heater/AC Control)</option>
                          <option value="Information Label">Information Label</option>
                          <option value="Inside Door Handle">Inside Door Handle</option>
                          <option value="Instrument Cluster (see also Speedo)">Instrument Cluster (see also Speedo)</option>
                          <option value="Instrument Cluster Bezel">Instrument Cluster Bezel</option>
                          <option value="Instrument Face Plate">Instrument Face Plate</option>
                          <option value="Intake Manifold">Intake Manifold</option>
                          <option value="Intercooler">Intercooler</option>
                          <option value="Intercooler Pipe">Intercooler Pipe</option>
                          <option value="Interior Complete">Interior Complete</option>
                          <option value="Interior Light">Interior Light</option>
                          <option value="Interior Trim Panel (Gate/Lid)">Interior Trim Panel (Gate/Lid)</option>
                          <option value="Interior Trim Panel (Quarter)">Interior Trim Panel (Quarter)</option>
                          <option value="Interior Trim Panel, Door (Back)">Interior Trim Panel, Door (Back)</option>
                          <option value="Interior Trim Panel, Door (Front)">Interior Trim Panel, Door (Front)</option>
                          <option value="Interior Trim Panel, Door (Rear)">Interior Trim Panel, Door (Rear)</option>
                          <option value="Inverter Cooler">Inverter Cooler</option>
                          <option value="Jack Assembly">Jack Assembly</option>
                          <option value="Keys/Latches and Locks">Keys/Latches and Locks</option>
                          <option value="Key Remote/Fob">Key Remote/Fob</option>
                          <option value="Kick Panel">Kick Panel</option>
                          <option value="Knee Assembly (see also Strut Assy)">Knee Assembly (see also Strut Assy)</option>
                          <option value="Lamp Wiring Harness">Lamp Wiring Harness</option>
                          <option value="Latch, Front Door">Latch, Front Door</option>
                          <option value="Latch, Rear Door">Latch, Rear Door</option>
                          <option value="Latch, Back Door">Latch, Back Door</option>
                          <option value="Latches">Latches</option>
                          <option value="Leaf Spring, Front">Leaf Spring, Front</option>
                          <option value="Leaf Spring, Rear">Leaf Spring, Rear</option>
                          <option value="License Lamp">License Lamp</option>
                          <option value="License Plate Bracket">License Plate Bracket</option>
                          <option value="Lid/Gate">Lid/Gate</option>
                          <option value="Lid Interior Trim Panel">Lid Interior Trim Panel</option>
                          <option value="Liftgate Assembly">Liftgate Assembly</option>
                          <option value="Liftgate Shell">Liftgate Shell</option>
                          <option value="Lock Actuator">Lock Actuator</option>
                          <option value="Lockout Hub, 4X4">Lockout Hub, 4X4</option>
                          <option value="Locks">Locks</option>
                          <option value="Lug Wrench">Lug Wrench</option>
                          <option value="Luggage Rack">Luggage Rack</option>
                          <option value="Marker/Fog Light, Front">Marker/Fog Light, Front</option>
                          <option value="Marker/Side Light, Rear">Marker/Side Light, Rear</option>
                          <option value="Master Cylinder">Master Cylinder</option>
                          <option value="Mirror, Door">Mirror, Door</option>
                          <option value="Mirror, Rear View">Mirror, Rear View</option>
                          <option value="Misc. Electrical">Misc. Electrical</option>
                          <option value="Moulding (Back Door)">Moulding (Back Door)</option>
                          <option value="Moulding (Fender)">Moulding (Fender)</option>
                          <option value="Moulding (Front Door)">Moulding (Front Door)</option>
                          <option value="Moulding (Lid/Hatch/Gate)">Moulding (Lid/Hatch/Gate)</option>
                          <option value="Moulding (Quarter Panel/Bed Side)">Moulding (Quarter Panel/Bed Side)</option>
                          <option value="Moulding (Rear Door)">Moulding (Rear Door)</option>
                          <option value="Moulding (Rocker)">Moulding (Rocker)</option>
                          <option value="Moulding (Windshield)">Moulding (Windshield)</option>
                          <option value="Mouldings (Misc)">Mouldings (Misc)</option>
                          <option value="Mud Flap">Mud Flap</option>
                          <option value="Neutral Safety Switch">Neutral Safety Switch</option>
                          <option value="Night Vision Camera">Night Vision Camera</option>
                          <option value="Nose (Front End Assembly)">Nose (Front End Assembly)</option>
                          <option value="Oil Cooler">Oil Cooler</option>
                          <option value="Oil Filter Adapter">Oil Filter Adapter</option>
                          <option value="Oil Pan, Engine">Oil Pan, Engine</option>
                          <option value="Oil Pan, Transmission">Oil Pan, Transmission</option>
                          <option value="Oil Pump, Engine">Oil Pump, Engine</option>
                          <option value="Outside Door Handle">Outside Door Handle</option>
                          <option value="Overdrive Unit (see also Transmission)">Overdrive Unit (see also Transmission)</option>
                          <option value="Owners Manual">Owners Manual</option>
                          <option value="Paddle Shifter">Paddle Shifter</option>
                          <option value="Park/Fog Lamp Front">Park/Fog Lamp Front</option>
                          <option value="Parcel Shelf">Parcel Shelf</option>
                          <option value="Park Lamp Rear (Side)">Park Lamp Rear (Side)</option>
                          <option value="Parking Assist Camera">Parking Assist Camera</option>
                          <option value="Pickup Bed">Pickup Bed</option>
                          <option value="Pickup Bed Floor">Pickup Bed Floor</option>
                          <option value="Pickup Bed Front Panel">Pickup Bed Front Panel</option>
                          <option value="Pickup Bed Side">Pickup Bed Side</option>
                          <option value="Pickup Cap/Camper Shell">Pickup Cap/Camper Shell</option>
                          <option value="Piston">Piston</option>
                          <option value="Pitman Arm">Pitman Arm</option>
                          <option value="Power Brake Booster">Power Brake Booster</option>
                          <option value="Power Inverter (Hybrid)">Power Inverter (Hybrid)</option>
                          <option value="Power Steering Assy">Power Steering Assy</option>
                          <option value="Power Steering Control Valve">Power Steering Control Valve</option>
                          <option value="Power Steering Cooler">Power Steering Cooler</option>
                          <option value="Power Steering Motor">Power Steering Motor</option>
                          <option value="Power Steering Pressure Cyl">Power Steering Pressure Cyl</option>
                          <option value="Power Steering Pressure Hose">Power Steering Pressure Hose</option>
                          <option value="Power Steering Pump">Power Steering Pump</option>
                          <option value="Power Steering Rack/Box/Gear">Power Steering Rack/Box/Gear</option>
                          <option value="Power Steering Reservoir">Power Steering Reservoir</option>
                          <option value="Pressure Plate">Pressure Plate</option>
                          <option value="Push Rod (Engine)">Push Rod (Engine)</option>
                          <option value="Quarter Interior Trim Panel">Quarter Interior Trim Panel</option>
                          <option value="Quarter Moulding">Quarter Moulding</option>
                          <option value="Quarter Panel">Quarter Panel</option>
                          <option value="Quarter Panel Extension">Quarter Panel Extension</option>
                          <option value="Quarter Repair Panel">Quarter Repair Panel</option>
                          <option value="Quarter Window">Quarter Window</option>
                          <option value="Quarter Window Motor">Quarter Window Motor</option>
                          <option value="Quarter Window Regulator">Quarter Window Regulator</option>
                          <option value="Rack &amp; Pinion (Steering)">Rack &amp; Pinion (Steering)</option>
                          <option value="Radiator">Radiator</option>
                          <option value="Radiator/Condenser mtd. Cooling Fan">Radiator/Condenser mtd. Cooling Fan</option>
                          <option value="Radiator Air Shutter">Radiator Air Shutter</option>
                          <option value="Radiator Core Support">Radiator Core Support</option>
                          <option value="Radiator Cover Baffle">Radiator Cover Baffle</option>
                          <option value="Radiator Fan Shroud">Radiator Fan Shroud</option>
                          <option value="Radiator Overflow Bottle">Radiator Overflow Bottle</option>
                          <option value="Radio/CD (see also A/C Control or TV Screen)">Radio/CD (see also A/C Control or TV Screen)</option>
                          <option value="Radio Bezel Trim">Radio Bezel Trim</option>
                          <option value="Radio Face Plate">Radio Face Plate</option>
                          <option value="Radius Arm, Front">Radius Arm, Front</option>
                          <option value="Rag Joint (see also Steering Coupler)">Rag Joint (see also Steering Coupler)</option>
                          <option value="Rear Axle Assy (RWD)">Rear Axle Assy (RWD)</option>
                          <option value="Rear Axle Beam (FWD)">Rear Axle Beam (FWD)</option>
                          <option value="Rear Body Panel">Rear Body Panel</option>
                          <option value="Rear Bumper Assembly (includes cover)">Rear Bumper Assembly (includes cover)</option>
                          <option value="Rear Bumper Cover">Rear Bumper Cover</option>
                          <option value="Rear Bumper Face Bar">Rear Bumper Face Bar</option>
                          <option value="Rear Bumper Guard">Rear Bumper Guard</option>
                          <option value="Rear Bumper Reinforcement/Misc">Rear Bumper Reinforcement/Misc</option>
                          <option value="Rear Clip">Rear Clip</option>
                          <option value="Rear Console">Rear Console</option>
                          <option value="Rear Crossmember">Rear Crossmember</option>
                          <option value="Rear Door (side of vehicle)">Rear Door (side of vehicle)</option>
                          <option value="Rear Door Handle, Inside">Rear Door Handle, Inside</option>
                          <option value="Rear Door Handle, Outside">Rear Door Handle, Outside</option>
                          <option value="Rear Door Hinge">Rear Door Hinge</option>
                          <option value="Rear Door Moulding">Rear Door Moulding</option>
                          <option value="Rear Door Regulator">Rear Door Regulator</option>
                          <option value="Rear Door Shell">Rear Door Shell</option>
                          <option value="Rear Door Switch">Rear Door Switch</option>
                          <option value="Rear Door Trim Panel">Rear Door Trim Panel</option>
                          <option value="Rear Door Vent Glass">Rear Door Vent Glass</option>
                          <option value="Rear Door Vent Glass regulator">Rear Door Vent Glass regulator</option>
                          <option value="Rear Door Window">Rear Door Window</option>
                          <option value="Rear Door Window Motor">Rear Door Window Motor</option>
                          <option value="Rear Door Window Regulator">Rear Door Window Regulator</option>
                          <option value="Rear Drive Shaft">Rear Drive Shaft</option>
                          <option value="Rear Finish Panel">Rear Finish Panel</option>
                          <option value="Rear Gate/Lid">Rear Gate/Lid</option>
                          <option value="Rear Gate Window Motor">Rear Gate Window Motor</option>
                          <option value="Rear Knuckle/Stub Axle">Rear Knuckle/Stub Axle</option>
                          <option value="Rear Lower Valance">Rear Lower Valance</option>
                          <option value="Rear Seat Belt Assembly">Rear Seat Belt Assembly</option>
                          <option value="Rear Suspension (see also Control Arms)">Rear Suspension (see also Control Arms)</option>
                          <option value="Rear Suspension Locating Arm">Rear Suspension Locating Arm</option>
                          <option value="Rear Suspension Trailing Arm">Rear Suspension Trailing Arm</option>
                          <option value="Rear Window Defogger">Rear Window Defogger</option>
                          <option value="Rear Window Washer Motor">Rear Window Washer Motor</option>
                          <option value="Receiver Dryer">Receiver Dryer</option>
                          <option value="Relay (Misc)">Relay (Misc)</option>
                          <option value="Ring and Pinion Only">Ring and Pinion Only</option>
                          <option value="Rocker Arm">Rocker Arm</option>
                          <option value="Rocker Moulding">Rocker Moulding</option>
                          <option value="Rocker Panel (see also Center Pillar)">Rocker Panel (see also Center Pillar)</option>
                          <option value="Roll Bar">Roll Bar</option>
                          <option value="Roll Bar Padding">Roll Bar Padding</option>
                          <option value="Roof">Roof</option>
                          <option value="Roof Glass Frame/Track">Roof Glass Frame/Track</option>
                          <option value="Roof Panel (see also Sunroof)">Roof Panel (see also Sunroof)</option>
                          <option value="Roof Rack">Roof Rack</option>
                          <option value="Running Boards">Running Boards</option>
                          <option value="Running Board Motor">Running Board Motor</option>
                          <option value="Seat, Back (3rd Row)">Seat, Back (3rd Row)</option>
                          <option value="Seat, Back (4th Row)">Seat, Back (4th Row)</option>
                          <option value="Seat, Back (5th Row)">Seat, Back (5th Row)</option>
                          <option value="Seat, Front">Seat, Front</option>
                          <option value="Seat, Rear (2nd Row)">Seat, Rear (2nd Row)</option>
                          <option value="Seat Belt, Front">Seat Belt, Front</option>
                          <option value="Seat Belt, Rear">Seat Belt, Rear</option>
                          <option value="Seat Belt Motor">Seat Belt Motor</option>
                          <option value="Seat Belt Pretensioner">Seat Belt Pretensioner</option>
                          <option value="Seat Belt Track (Electric)">Seat Belt Track (Electric)</option>
                          <option value="Seat Motor">Seat Motor</option>
                          <option value="Seat Switch">Seat Switch</option>
                          <option value="Seat Track, Front Only">Seat Track, Front Only</option>
                          <option value="Sensor (Body, Misc)">Sensor (Body, Misc)</option>
                          <option value="Sensor (Chassis, Misc)">Sensor (Chassis, Misc)</option>
                          <option value="Sensor (Drivetrain, Misc)">Sensor (Drivetrain, Misc)</option>
                          <option value="Shifter Assembly (Floor)">Shifter Assembly (Floor)</option>
                          <option value="Shifter Linkage">Shifter Linkage</option>
                          <option value="Shock Absorber">Shock Absorber</option>
                          <option value="Shock Mount">Shock Mount</option>
                          <option value="Sill Plate">Sill Plate</option>
                          <option value="Skid Plate">Skid Plate</option>
                          <option value="Slave Cylinder">Slave Cylinder</option>
                          <option value="Smog Pump">Smog Pump</option>
                          <option value="Spare Tire Carrier">Spare Tire Carrier</option>
                          <option value="Spare Tire Cover">Spare Tire Cover</option>
                          <option value="Spare Tire Hoist">Spare Tire Hoist</option>
                          <option value="Speaker">Speaker</option>
                          <option value="Special Glass">Special Glass</option>
                          <option value="Speedometer (see also Instr. Cluster)">Speedometer (see also Instr. Cluster)</option>
                          <option value="Speedometer Cable">Speedometer Cable</option>
                          <option value="Spindle">Spindle</option>
                          <option value="Spoiler, Front">Spoiler, Front</option>
                          <option value="Spoiler, Rear">Spoiler, Rear</option>
                          <option value="Spring Hanger">Spring Hanger</option>
                          <option value="Stabilizer Bar Only">Stabilizer Bar Only</option>
                          <option value="Starter">Starter</option>
                          <option value="Steering Column">Steering Column</option>
                          <option value="Steering Column Shaft">Steering Column Shaft</option>
                          <option value="Steering Coupler">Steering Coupler</option>
                          <option value="Steering Knuckle (see also Knee &amp; Strut)">Steering Knuckle (see also Knee &amp; Strut)</option>
                          <option value="Steering Pump">Steering Pump</option>
                          <option value="Steering Rack/Box/Gear">Steering Rack/Box/Gear</option>
                          <option value="Steering Wheel">Steering Wheel</option>
                          <option value="Strut (see also Knee Assy)">Strut (see also Knee Assy)</option>
                          <option value="Strut Tower Brace">Strut Tower Brace</option>
                          <option value="Sun Roof / T-Top">Sun Roof / T-Top</option>
                          <option value="Sun Roof Motor">Sun Roof Motor</option>
                          <option value="Sunvisor">Sunvisor</option>
                          <option value="Supercharger/Turbocharger">Supercharger/Turbocharger</option>
                          <option value="Tachometer">Tachometer</option>
                          <option value="Tail Light">Tail Light</option>
                          <option value="Tail Light Circuit Board">Tail Light Circuit Board</option>
                          <option value="Tail Light Lens">Tail Light Lens</option>
                          <option value="Tailgate Cable">Tailgate Cable</option>
                          <option value="Tailgate/Trunk Lid">Tailgate/Trunk Lid</option>
                          <option value="Tailgate Hinge">Tailgate Hinge</option>
                          <option value="Tailgate Lift Motor">Tailgate Lift Motor</option>
                          <option value="Tailgate Shell">Tailgate Shell</option>
                          <option value="Tailgate Window Regulator">Tailgate Window Regulator</option>
                          <option value="Thermostat Housing">Thermostat Housing</option>
                          <option value="Third Brake Light">Third Brake Light</option>
                          <option value="Throttle Body/Throttle Valve Housing">Throttle Body/Throttle Valve Housing</option>
                          <option value="Throwout Bearing">Throwout Bearing</option>
                          <option value="Tie Rod">Tie Rod</option>
                          <option value="Timing Belt/Chain">Timing Belt/Chain</option>
                          <option value="Timing Cover">Timing Cover</option>
                          <option value="Timing Gears">Timing Gears</option>
                          <option value="Tire">Tire</option>
                          <option value="Tonneau Cover">Tonneau Cover</option>
                          <option value="Torque Convertor">Torque Convertor</option>
                          <option value="Torsion Bar">Torsion Bar</option>
                          <option value="Tow Hook">Tow Hook</option>
                          <option value="Track/Watts Linkage">Track/Watts Linkage</option>
                          <option value="Trailer Brake Controller">Trailer Brake Controller</option>
                          <option value="Trailer Hitch">Trailer Hitch</option>
                          <option value="Trans OD Unit (see also Transmission)">Trans OD Unit (see also Transmission)</option>
                          <option value="Transaxle Housing Only">Transaxle Housing Only</option>
                          <option value="Transfer Case">Transfer Case</option>
                          <option value="Transfer Case Adapter">Transfer Case Adapter</option>
                          <option value="Transfer Case Core">Transfer Case Core</option>
                          <option value="Transfer Case Electric Motor">Transfer Case Electric Motor</option>
                          <option value="Transfer Case Switch">Transfer Case Switch</option>
                          <option value="Transmission">Transmission</option>
                          <option value="Transmission Bellhousing Only">Transmission Bellhousing Only</option>
                          <option value="Transmission Clutch Actuator">Transmission Clutch Actuator</option>
                          <option value="Transmission Computer">Transmission Computer</option>
                          <option value="Transmission Core">Transmission Core</option>
                          <option value="Transmission Crossmember">Transmission Crossmember</option>
                          <option value="Transmission Front Pump">Transmission Front Pump</option>
                          <option value="Transmission Mount">Transmission Mount</option>
                          <option value="Transmission Pan">Transmission Pan</option>
                          <option value="Transmission Torque Converter">Transmission Torque Converter</option>
                          <option value="Transmission Valve Body">Transmission Valve Body</option>
                          <option value="Transmission Wiring Harness">Transmission Wiring Harness</option>
                          <option value="Trim Ring">Trim Ring</option>
                          <option value="Trunk Lid Pull Down Motor">Trunk Lid Pull Down Motor</option>
                          <option value="Trunk Lid/Hatch">Trunk Lid/Hatch</option>
                          <option value="Trunk Lid/Hatch Hinge">Trunk Lid/Hatch Hinge</option>
                          <option value="Trunk Lid/Hatch Shock">Trunk Lid/Hatch Shock</option>
                          <option value="Trunk Lid/Tailgate Moulding">Trunk Lid/Tailgate Moulding</option>
                          <option value="TTop/Sunroof">TTop/Sunroof</option>
                          <option value="Turbo/Supercharger Core">Turbo/Supercharger Core</option>
                          <option value="Turbocharger/Supercharger">Turbocharger/Supercharger</option>
                          <option value="Turn Signal/Fog Lamp">Turn Signal/Fog Lamp</option>
                          <option value="TV Screen (see also Radio or Heater/AC Control)">TV Screen (see also Radio or Heater/AC Control)</option>
                          <option value="Uniside">Uniside</option>
                          <option value="Vacuum Pump">Vacuum Pump</option>
                          <option value="Vacuum Storage Tank">Vacuum Storage Tank</option>
                          <option value="Valance, Front">Valance, Front</option>
                          <option value="Valance, Rear">Valance, Rear</option>
                          <option value="Valve Cover">Valve Cover</option>
                          <option value="Vapor Canister">Vapor Canister</option>
                          <option value="Voltage Regulator">Voltage Regulator</option>
                          <option value="Washer Nozzle">Washer Nozzle</option>
                          <option value="Water Pump">Water Pump</option>
                          <option value="Water Separator">Water Separator</option>
                          <option value="Weather Stripping">Weather Stripping</option>
                          <option value="Wheel (display w image)">Wheel (display w image)</option>
                          <option value="Wheel (display w/o image)">Wheel (display w/o image)</option>
                          <option value="Wheel Bearing">Wheel Bearing</option>
                          <option value="Wheel Cover/Hubcap (display w image)">Wheel Cover/Hubcap (display w image)</option>
                          <option value="Wheel Cover/Hubcap (display w/o image)">Wheel Cover/Hubcap (display w/o image)</option>
                          <option value="Wheel Lug Nut">Wheel Lug Nut</option>
                          <option value="Wheel Opening Moulding">Wheel Opening Moulding</option>
                          <option value="Wheelchair Lift">Wheelchair Lift</option>
                          <option value="Wheelchair Ramp">Wheelchair Ramp</option>
                          <option value="Wheelhouse (Rear)">Wheelhouse (Rear)</option>
                          <option value="Winch">Winch</option>
                          <option value="Window Motor">Window Motor</option>
                          <option value="Window Regulator (Front)">Window Regulator (Front)</option>
                          <option value="Window Regulator (Rear)">Window Regulator (Rear)</option>
                          <option value="Window Shade">Window Shade</option>
                          <option value="Window Switch (Front Door)">Window Switch (Front Door)</option>
                          <option value="Window Switch (Rear Door)">Window Switch (Rear Door)</option>
                          <option value="Window Washer Motor, Rear">Window Washer Motor, Rear</option>
                          <option value="Windshield">Windshield</option>
                          <option value="Windshield Frame">Windshield Frame</option>
                          <option value="Windshield Hinge">Windshield Hinge</option>
                          <option value="Windshield Washer Motor (Front)">Windshield Washer Motor (Front)</option>
                          <option value="Windshield Washer Reservoir">Windshield Washer Reservoir</option>
                          <option value="Wiper Arm">Wiper Arm</option>
                          <option value="Wiper Linkage">Wiper Linkage</option>
                          <option value="Wiper Motor, Front (Windshield)">Wiper Motor, Front (Windshield)</option>
                          <option value="Wiper Motor, Rear">Wiper Motor, Rear</option>
                          <option value="Wiring Harness (Air Conditioning)">Wiring Harness (Air Conditioning)</option>
                          <option value="Wiring Harness (Body)">Wiring Harness (Body)</option>
                          <option value="Wiring Harness (Dash)">Wiring Harness (Dash)</option>
                          <option value="Wiring Harness (Engine)">Wiring Harness (Engine)</option>
                          <option value="Wiring Harness (Lamp)">Wiring Harness (Lamp)</option>
                          <option value="Wiring Harness (Misc)">Wiring Harness (Misc)</option>
                          <option value="Wiring Harness (Transmission)">Wiring Harness (Transmission)</option>
                          <option value="Yoke/U-Joint">Yoke/U-Joint</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white text-gray-800 placeholder-gray-500 focus:border-gray-900 focus:outline-none transition"
                    />

                    <input
                      type="tel"
                      placeholder="Enter Phone xxxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white text-gray-800 placeholder-gray-500 focus:border-gray-900 focus:outline-none transition"
                    />

                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white text-gray-800 placeholder-gray-500 focus:border-gray-900 focus:outline-none transition"
                    />
                    <div className="text-xs text-white">
                    <input type='checkbox' value={1} className="mb-2 "/> By checking this box, I agree to receive conversational SMS messages from EcoDrive Auto Parts LLC related to my inquiry, including quotes, order updates, and shipping notifications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. View our Privacy Policy: https://ecodriveautoparts.store/privacy
                    </div> 
                    <button
                              onClick={handleSubmit}
                              disabled={isSubmitting}
                              className={`w-full bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-lg ${
                                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                              }`}
                            >
                              {isSubmitting ? 'SENDING...' : 'SEARCH'}
                            </button>
                    
                    {submitStatus === 'success' && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                        ✅ Request sent successfully!
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center text-sm">
                        ❌ Please call us at +1 (201) 201-1781
                      </div>
                    )}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative mb-[-1px]">
        <svg viewBox="0 0 1440 120" className="w-full fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}