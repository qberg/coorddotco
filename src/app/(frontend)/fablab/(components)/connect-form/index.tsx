'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { format } from 'date-fns'
import { motion, AnimatePresence } from 'motion/react'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import CoordButton from '@/components/ui/coord-button'

const formSchema = z.object({
  location: z.string({
    required_error: 'Please select a location',
  }),
  date: z.date({
    required_error: 'Please select a date',
  }),
  time: z.string({
    required_error: 'Please select a time',
  }),

  mode: z.array(z.string()).refine((val) => val.length > 0, {
    message: 'You must select one mode',
  }),

  services: z.string({
    required_error: 'Please select a service',
  }),
})

type FormData = z.infer<typeof formSchema>

const modes = [
  { id: 'online', label: 'Online' },
  { id: 'offline', label: 'Offline' },
  { id: 'hybrid', label: 'Hybrid' },
]

const ConnectForm = () => {
  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'success'>('idle')

  const buttonCopy = {
    idle: 'Book Now',
    loading: 'Submitting...',
    success: 'Booked!',
  }

  const form = useForm({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      mode: [],
    },
  })

  const onSubmit = async (data: FormData) => {
    setButtonState('loading')
    try {
      console.log(data)
      {
        /*Form Submission Logic */
      }
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setButtonState('success')

      setTimeout(() => {
        setButtonState('idle')
      }, 1750)
    } catch (error) {
      console.error('Error Submitting Form:', error)
    }
  }

  return (
    <div className="w-full md:max-w-lg sxl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 md:gap-3 sxl:gap-6 2xl:gap-7 3xl:gap-9"
        >
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="connect-label">Location</FormLabel>

                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full border-gray-300">
                      <SelectValue
                        placeholder="Select Location"
                        className="font-hanken text-base"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                    <SelectItem value="England">England</SelectItem>
                    <SelectItem value="Scotland">Scotland</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="connect-label">Date</FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className="w-full border-gray-300 pl-3 rounded-none font-hanken text-base font-extralight"
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span className="">Select Date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="connect-label">Time</FormLabel>

                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full border-gray-300">
                      <SelectValue
                        placeholder="Pick Time (IST)"
                        className="font-hanken text-base"
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="9am">9:00 AM</SelectItem>
                    <SelectItem value="10am">10:00 AM</SelectItem>
                    <SelectItem value="11am">11:00 AM</SelectItem>
                    <SelectItem value="12pm">12:00 PM</SelectItem>
                    <SelectItem value="1pm">1:00 PM</SelectItem>
                    <SelectItem value="2pm">2:00 PM</SelectItem>
                    <SelectItem value="3pm">3:00 PM</SelectItem>
                    <SelectItem value="4pm">4:00 PM</SelectItem>
                    <SelectItem value="5pm">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mode"
            render={() => (
              <FormItem>
                <FormLabel className="connect-label">Mode of Fablab</FormLabel>

                <div className="flex gap-6">
                  {modes.map((mode) => (
                    <FormField
                      key={mode.id}
                      control={form.control}
                      name="mode"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={mode.id}
                            className="flex flex-row items-center gap-1 sxl:gap-3"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(mode.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, mode.id])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== mode.id),
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-bold font-hanken text-base">
                              {mode.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="connect-label">Services</FormLabel>

                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full border-gray-300">
                      <SelectValue placeholder="Select Service" className="font-hanken text-base" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="service1">Woodworking</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <CoordButton variant="yellow" type="submit" disabled={buttonState !== 'idle'}>
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={buttonState}
                  initial={{ y: -25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                >
                  {buttonCopy[buttonState]}
                </motion.span>
              </AnimatePresence>
            </CoordButton>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ConnectForm
