import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "השם חייב להכיל לפחות 2 תווים" }),
  email: z.string().email({ message: "אנא הזן כתובת דוא\"ל תקינה" }),
  phone: z.string().min(9, { message: "אנא הזן מספר טלפון תקין" }),
  service: z.string().min(1, { message: "אנא בחר שירות" }),
  message: z.string().min(10, { message: "ההודעה חייבת להכיל לפחות 10 תווים" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission (would be connected to backend in a real application)
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      form.reset();
      
      toast({
        title: "ההודעה נשלחה!",
        description: "נחזור אליך בהקדם האפשרי.",
      });
    }, 1000);
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0F4C81] mb-4">צור קשר</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            יש לך שאלות או מוכן להתחיל את פרויקט ה-FPV הבא שלך? צור קשר עוד היום!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg" dir="rtl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">שם</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="השם שלך" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C81]" 
                              {...field} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">אימייל</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="האימייל שלך" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C81]" 
                              {...field} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">טלפון</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="מספר הטלפון שלך" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C81]" 
                              {...field} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">שירות מבוקש</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C81]">
                                <SelectValue placeholder="בחר שירות" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="building">בניית רחפנים מותאמת אישית</SelectItem>
                              <SelectItem value="repair">תיקונים ותחזוקה</SelectItem>
                              <SelectItem value="upgrade">שדרוגי ביצועים</SelectItem>
                              <SelectItem value="training">הדרכת טיסת FPV</SelectItem>
                              <SelectItem value="software">עדכוני תוכנה וקושחה</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-gray-700">הודעה</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="ספר לנו על הפרויקט שלך" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C81]" 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#0F4C81] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-['Poppins'] font-medium text-center transition duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "שולח..." : "שלח הודעה"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg h-full" dir="rtl">
              <h3 className="font-['Poppins'] font-semibold text-2xl mb-6 text-[#0F4C81]">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0F4C81] text-white p-3 rounded-lg ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">המיקום שלנו</p>
                    <p className="text-gray-600">מבוא חמה, 1293400, ישראל</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0F4C81] text-white p-3 rounded-lg ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">וואטסאפ</p>
                    <a href="https://wa.me/97248483335" className="text-gray-600 hover:text-[#0F4C81]">+972-4-848-3335</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0F4C81] text-white p-3 rounded-lg ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">כתובת אימייל</p>
                    <a href="mailto:shachar@bermanfpv.com" className="text-gray-600 hover:text-[#0F4C81]">shachar@bermanfpv.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0F4C81] text-white p-3 rounded-lg ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">שעות פעילות</p>
                    <p className="text-gray-600">ראשון - חמישי: 9:00 - 18:00</p>
                    <p className="text-gray-600">שישי: 9:00 - 14:00</p>
                    <p className="text-gray-600">שבת: סגור</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
