import { useState } from "react"
import { Home, MessageSquare, Users, BarChart, Settings, ChevronDown, Plus, Search, Filter, MoreVertical, Star, UserPlus, Moon, Sun, Send, Compass, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

const ambassadors = [
  {
    id: 1,
    name: "Alice Johnson",
    company: "TechCorp",
    email: "alice@techcorp.com",
    status: "Active",
    referrals: 15,
    conversions: 8,
    earnings: 4500,
    performance: 92,
  },
  {
    id: 2,
    name: "Bob Smith",
    company: "Marketing Pro",
    email: "bob@marketingpro.com",
    status: "Active",
    referrals: 22,
    conversions: 12,
    earnings: 6800,
    performance: 88,
  },
  {
    id: 3,
    name: "Carol Williams",
    company: "Sales Experts",
    email: "carol@salesexperts.com",
    status: "Inactive",
    referrals: 8,
    conversions: 3,
    earnings: 1500,
    performance: 75,
  },
  {
    id: 4,
    name: "David Brown",
    company: "Innovate Inc.",
    email: "david@innovateinc.com",
    status: "Active",
    referrals: 18,
    conversions: 10,
    earnings: 5500,
    performance: 90,
  },
  {
    id: 5,
    name: "Eva Garcia",
    company: "Global Solutions",
    email: "eva@globalsolutions.com",
    status: "Active",
    referrals: 25,
    conversions: 15,
    earnings: 8200,
    performance: 95,
  },
]

const referrals = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "New", date: "2023-05-01", company: "ABC Corp" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Validated", date: "2023-05-02", company: "XYZ Inc" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "In Progress", date: "2023-05-03", company: "123 LLC" },
  { id: 4, name: "Sarah Brown", email: "sarah@example.com", status: "Won", date: "2023-05-04", company: "Tech Solutions" },
  { id: 5, name: "Chris Lee", email: "chris@example.com", status: "Lost", date: "2023-05-05", company: "Digital Innovations" },
  { id: 6, name: "Emily Davis", email: "emily@example.com", status: "New", date: "2023-05-06", company: "Green Energy Co" },
  { id: 7, name: "Tom Wilson", email: "tom@example.com", status: "Validated", date: "2023-05-07", company: "Smart Systems" },
  { id: 8, name: "Lisa Anderson", email: "lisa@example.com", status: "In Progress", date: "2023-05-08", company: "Future Tech" },
]

const messages = [
  { id: 1, sender: "Alice Johnson", content: "Hey, how's it going with the new referral program?", date: "2023-05-01 09:00" },
  { id: 2, sender: "Bob Smith", content: "I have a question about my commission calculation.", date: "2023-05-02 14:30" },
  { id: 3, sender: "Carol Williams", content: "Can you provide more marketing materials?", date: "2023-05-03 11:15" },
  { id: 4, sender: "David Brown", content: "Just wanted to share that I closed a big deal!", date: "2023-05-04 16:45" },
  { id: 5, sender: "Eva Garcia", content: "When is the next ambassador meetup?", date: "2023-05-05 10:30" },
]

const performanceData = [
  { month: "Jan", ambassadors: 100, referrals: 150, conversions: 50 },
  { month: "Feb", ambassadors: 120, referrals: 180, conversions: 60 },
  { month: "Mar", ambassadors: 150, referrals: 220, conversions: 80 },
  { month: "Apr", ambassadors: 180, referrals: 280, conversions: 100 },
  { month: "May", ambassadors: 220, referrals: 350, conversions: 130 },
  { month: "Jun", ambassadors: 250, referrals: 400, conversions: 150 },
]

const topAmbassadors = [
  { id: 1, name: "Emma Thompson", company: "Tech Innovators", industry: "Technology", validationPoints: 95, dealsClosed: 28, earnings: 15000, badge: "Top Performer" },
  { id: 2, name: "Michael Chen", company: "Global Marketing", industry: "Marketing", validationPoints: 92, dealsClosed: 25, earnings: 13500, badge: "Rising Star" },
  { id: 3, name: "Sophia Rodriguez", company: "HealthTech Solutions", industry: "Healthcare", validationPoints: 88, dealsClosed: 22, earnings: 12000, badge: "Industry Expert" },
  { id: 4, name: "Alexander Kim", company: "FinTech Innovations", industry: "Finance", validationPoints: 86, dealsClosed: 20, earnings: 11000 },
  { id: 5, name: "Olivia Patel", company: "EcoSolutions", industry: "Environment", validationPoints: 84, dealsClosed: 18, earnings: 10000 },
  { id: 6, name: "Daniel Lee", company: "AI Research Labs", industry: "Artificial Intelligence", validationPoints: 82, dealsClosed: 17, earnings: 9500 },
  { id: 7, name: "Isabella Müller", company: "AutoTech", industry: "Automotive", validationPoints: 80, dealsClosed: 16, earnings: 9000 },
  { id: 8, name: "Ahmed Hassan", company: "Smart Energy", industry: "Energy", validationPoints: 78, dealsClosed: 15, earnings: 8500 },
  { id: 9, name: "Yuki Tanaka", company: "RoboTech", industry: "Robotics", validationPoints: 76, dealsClosed: 14, earnings: 8000 },
  { id: 10, name: "Zoe Carter", company: "BioInnovate", industry: "Biotechnology", validationPoints: 74, dealsClosed: 13, earnings: 7500 },
  { id: 11, name: "Lucas Silva", company: "AgroTech", industry: "Agriculture", validationPoints: 72, dealsClosed: 12, earnings: 7000 },
  { id: 12, name: "Aisha Kapoor", company: "EduTech Solutions", industry: "Education", validationPoints: 70, dealsClosed: 11, earnings: 6500 },
  { id: 13, name: "Ethan Wright", company: "SpaceTech", industry: "Aerospace", validationPoints: 68, dealsClosed: 10, earnings: 6000 },
  { id: 14, name: "Mia Johnson", company: "CyberSecurity Pro", industry: "Cybersecurity", validationPoints: 66, dealsClosed: 9, earnings: 5500 },
  { id: 15, name: "Noah Garcia", company: "VR Innovations", industry: "Virtual Reality", validationPoints: 64, dealsClosed: 8, earnings: 5000 },
  { id: 16, name: "Liam O'Connor", company: "GreenEnergy Solutions", industry: "Renewable Energy", validationPoints: 62, dealsClosed: 7, earnings: 4500 },
]

export default function Dashboard() {
  const [activePage, setActivePage] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [industryFilter, setIndustryFilter] = useState("all")
  const [rankingCriteria, setRankingCriteria] = useState("validationPoints")
  const { theme, setTheme } = useTheme()

  const filteredAmbassadors = ambassadors.filter((ambassador) => {
    const matchesSearch =
      ambassador.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ambassador.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ambassador.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || ambassador.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  const filteredReferrals = referrals.filter((referral) =>
    referral.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    referral.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    referral.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const groupedReferrals = filteredReferrals.reduce((acc, referral) => {
    if (!acc[referral.status]) {
      acc[referral.status] = []
    }
    acc[referral.status].push(referral)
    return acc
  }, {})

  const filteredTopAmbassadors = topAmbassadors
    .filter(ambassador => industryFilter === "all" || ambassador.industry === industryFilter)
    .sort((a, b) => b[rankingCriteria] - a[rankingCriteria])
    .slice(0, 16)

  const renderContent = () => {
    switch (activePage) {
      case "overview":
        return (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Ambassadors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Referrals</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">423</div>
                  <p className="text-xs text-muted-foreground">+5% from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.5%</div>
                  <p className="text-xs text-muted-foreground">+2.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Commissions</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,345</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Ambassadors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Earnings</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$567</div>
                  <p className="text-xs text-muted-foreground">+3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex  flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Eva Garcia</div>
                  <p className="text-xs text-muted-foreground">$8,200 in earnings</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <p className="text-xs text-muted-foreground">+0.2 from last month</p>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    ambassadors: {
                      label: "Ambassadors",
                      color: "hsl(var(--chart-1))",
                    },
                    referrals: {
                      label: "Referrals",
                      color: "hsl(var(--chart-2))",
                    },
                    conversions: {
                      label: "Conversions",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line type="monotone" dataKey="ambassadors" stroke="var(--color-ambassadors)" strokeWidth={2} />
                      <Line type="monotone" dataKey="referrals" stroke="var(--color-referrals)" strokeWidth={2} />
                      <Line type="monotone" dataKey="conversions" stroke="var(--color-conversions)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </>
        )
      case "referrals":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Referral Management</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Referral
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <Input
                className="w-64"
                placeholder="Search referrals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {["New", "Validated", "In Progress", "Won", "Lost"].map((status) => (
                <div key={status} className="space-y-2">
                  <h3 className="font-semibold text-lg">{status}</h3>
                  <div className="bg-gray-100 p-4 rounded-lg  space-y-2 min-h-[200px]">
                    {groupedReferrals[status]?.map((referral) => (
                      <Card key={referral.id} className="bg-white">
                        <CardContent className="p-4">
                          <div className="font-medium">{referral.name}</div>
                          <div className="text-sm text-gray-500">{referral.company}</div>
                          <div className="text-sm text-gray-500">{referral.email}</div>
                          <div className="text-xs text-gray-400 mt-2">{referral.date}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "ambassadors":
        return (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Ambassadors</h1>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" /> Add New Ambassador
              </Button>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-1 w-full md:w-auto">
                    <Input
                      placeholder="Search ambassadors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" /> More Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ambassador List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Referrals</TableHead>
                      <TableHead>Conversions</TableHead>
                      <TableHead>Earnings</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAmbassadors.map((ambassador) => (
                      <TableRow key={ambassador.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${ambassador.name.charAt(0)}`} />
                              <AvatarFallback>{ambassador.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{ambassador.name}</div>
                              <div className="text-sm text-gray-500">{ambassador.company}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              ambassador.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {ambassador.status}
                          </span>
                        </TableCell>
                        <TableCell>{ambassador.referrals}</TableCell>
                        <TableCell>{ambassador.conversions}</TableCell>
                        <TableCell>${ambassador.earnings.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="mr-2">{ambassador.performance}%</span>
                            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary"
                                style={{ width: `${ambassador.performance}%` }}
                              ></div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Star className="mr-2 h-4 w-4" /> View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <MessageSquare className="mr-2 h-4 w-4" /> Send Message
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </>
        )
      case "messages":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${message.sender.charAt(0)}`} />
                        <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                        <p className="text-sm text-gray-500 truncate">{message.content}</p>
                      </div>
                      <span className="text-xs text-gray-400">{message.date.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Message Thread</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${message.sender.charAt(0)}`} />
                        <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">{message.sender}</h4>
                          <span className="text-xs text-gray-400">{message.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Textarea placeholder="Type your message here..." className="flex-1" />
                  <Button size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "settings":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="profile" className="w-full">
                <TabsList>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" placeholder="Tell us about yourself" />
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </TabsContent>
                <TabsContent value="notifications">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                        <p className="text-sm text-gray-500">Receive email notifications about your account</p>
                      </div>
                      <Switch id="emailNotifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="smsNotifications">SMS Notifications</Label>
                        <p className="text-sm text-gray-500">Receive SMS notifications about your account</p>
                      </div>
                      <Switch id="smsNotifications" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="security">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                    </div>
                    <Button>Change Password</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )
      case "explore":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Explore Top Ambassadors</h2>
              <div className="flex space-x-4">
                <Select value={industryFilter} onValueChange={setIndustryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={rankingCriteria} onValueChange={setRankingCriteria}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ranking criteria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="validationPoints">Validation Points</SelectItem>
                    <SelectItem value="dealsClosed">Deals Closed</SelectItem>
                    <SelectItem value="earnings">Earnings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTopAmbassadors.map((ambassador) => (
                <Card key={ambassador.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold">{ambassador.name}</CardTitle>
                      {ambassador.badge && (
                        <Badge variant="secondary" className="ml-2">
                          {ambassador.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{ambassador.company}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Industry:</span>
                        <span className="text-sm font-medium">{ambassador.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Validation Points:</span>
                        <span className="text-sm font-medium">{ambassador.validationPoints}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Deals Closed:</span>
                        <span className="text-sm font-medium">{ambassador.dealsClosed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Earnings:</span>
                        <span className="text-sm font-medium">${ambassador.earnings.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                  <div className="px-6 py-4 bg-gray-50">
                    <Button className="w-full">View Profile</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary">ambasee</h1>
        </div>
        <nav className="mt-8">
          <a
            href="#"
            onClick={() => setActivePage("overview")}
            className={`flex items-center px-4 py-2 text-gray-700 ${
              activePage === "overview" ? "bg-gray-100" : ""
            }`}
          >
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a
            href="#"
            onClick={() => setActivePage("referrals")}
            className={`flex items-center px-4 py-2 mt-1 text-gray-600 ${
              activePage === "referrals" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <BarChart className="w-5 h-5 mr-3" />
            Referrals
          </a>
          <a
            href="#"
            onClick={() => setActivePage("ambassadors")}
            className={`flex items-center px-4 py-2 mt-1 text-gray-600 ${
              activePage === "ambassadors" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            Ambassadors
          </a>
          <a
            href="#"
            onClick={() => setActivePage("explore")}
            className={`flex items-center px-4 py-2 mt-1 text-gray-600 ${
              activePage === "explore" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <Compass className="w-5 h-5 mr-3" />
            Explore
          </a>
          <a
            href="#"
            onClick={() => setActivePage("messages")}
            className={`flex items-center px-4 py-2 mt-1 text-gray-600 ${
              activePage === "messages" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Messages
          </a>
          <a
            href="#"
            onClick={() => setActivePage("settings")}
            className={`flex items-center px-4 py-2 mt-1 text-gray-600 ${
              activePage === "settings" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium">John Doe</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}