// declare global {
//   interface Window {
//     dataLayer: any[];
//   }
// }

import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
// import { Form } from './components/ui/form'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'

function App() {
  // GTM Data Layer initialization
  window.dataLayer = window.dataLayer || [];

  const handleVehicleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // ASC 1.1 Vehicle Search Event
    window.dataLayer.push({
      event: 'vehicle_search',
      vehicle_type: 'new', // or 'used'
      search_type: 'inventory',
      vehicle_make: 'Toyota', // example
      vehicle_model: 'Camry', // example
    });
  };

  const handleTestDriveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ASC 1.1 Test Drive Request Event
    window.dataLayer.push({
      event: 'test_drive_submit',
      vehicle_type: 'new',
      vehicle_make: 'Toyota',
      vehicle_model: 'Camry',
      vehicle_year: '2024',
      vehicle_trim: 'LE',
      vehicle_price: '25000',
      dealer_id: 'KLJ45LGV',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Auto Dealership Demo Site</h1>
        <p className="text-gray-600">GTM Implementation Testing Ground</p>
      </header>

      <Tabs defaultValue="inventory" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="inventory">Inventory Search</TabsTrigger>
          <TabsTrigger value="testdrive">Test Drive</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory">
          <Card>
            <CardHeader>
              <CardTitle>Search Inventory</CardTitle>
              <CardDescription>Find your perfect vehicle</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVehicleSearch} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="make">Make</Label>
                    <Input id="make" placeholder="Enter make" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" placeholder="Enter model" />
                  </div>
                </div>
                <Button type="submit" className="w-full">Search Vehicles</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testdrive">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Test Drive</CardTitle>
              <CardDescription>Book your test drive today</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTestDriveSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <Button type="submit" className="w-full">Schedule Test Drive</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Dealership</CardTitle>
              <CardDescription>Get in touch with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Input id="message" placeholder="Your message" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default App 