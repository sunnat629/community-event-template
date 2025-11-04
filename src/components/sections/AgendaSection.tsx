import { Clock, Coffee, Code, Users, Presentation, Award, Zap } from "lucide-react";

const agendaItems = [
  {
    time: "9:00 AM",
    title: "Registration & Breakfast",
    description: "Check-in, networking, and morning refreshments",
    icon: Coffee,
    type: "break"
  },
  {
    time: "10:00 AM",
    title: "Opening Keynote",
    description: "The Future of Flutter: What's Next in 2025",
    icon: Presentation,
    type: "keynote"
  },
  {
    time: "11:00 AM",
    title: "Technical Track 1",
    description: "Advanced State Management with Riverpod",
    icon: Code,
    type: "session"
  },
  {
    time: "11:45 AM",
    title: "Technical Track 2",
    description: "Building Scalable Flutter Apps with Clean Architecture",
    icon: Zap,
    type: "session"
  },
  {
    time: "12:30 PM",
    title: "Lunch Break",
    description: "Networking lunch with fellow developers",
    icon: Coffee,
    type: "break"
  },
  {
    time: "1:30 PM",
    title: "Workshops",
    description: "Hands-on: Firebase Integration & Real-time Apps",
    icon: Code,
    type: "workshop"
  },
  {
    time: "2:30 PM",
    title: "Panel Discussion",
    description: "Career Growth in Flutter Development",
    icon: Users,
    type: "panel"
  },
  {
    time: "3:30 PM",
    title: "Lightning Talks",
    description: "Community showcases and quick insights",
    icon: Zap,
    type: "session"
  },
  {
    time: "4:15 PM",
    title: "Closing & Awards",
    description: "Wrap-up, prizes, and final networking",
    icon: Award,
    type: "closing"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "keynote": return "bg-primary/10 text-primary border-primary/20";
    case "session": return "bg-secondary/10 text-secondary border-secondary/20";
    case "workshop": return "bg-accent/10 text-accent border-accent/20";
    case "panel": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    case "break": return "bg-muted text-muted-foreground border-muted";
    case "closing": return "bg-gradient-hero text-white border-primary";
    default: return "bg-muted text-muted-foreground";
  }
};

export const AgendaSection = () => {
  return (
    <section id="agenda" className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Event Agenda</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A full day of learning, building, and connecting with the Flutter community
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] sm:left-[50px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />
            
            <div className="space-y-6">
              {agendaItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="relative flex gap-4 sm:gap-8 items-start card-hover"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Time badge */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-4 border-background shadow-lg ${getTypeColor(item.type)}`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 glass-card rounded-2xl p-6 sm:p-8 card-glow group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Clock className="w-4 h-4" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
