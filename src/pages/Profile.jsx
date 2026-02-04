import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profile from "@/assets/profile.png";

const Profile = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-background pb-32">
    
      <div className="relative h-56 bg-gradient-to-br from-primary/30 via-primary/10 to-background">
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <h1 className="relative z-10 text-4xl font-bold text-foreground text-center pt-16">
          Profile
        </h1>
      </div>

      
      <div className="-mt-24 px-6">
        <div className="max-w-lg mx-auto bg-card/90 backdrop-blur-xl rounded-[32px] shadow-2xl p-8">
          
          <div className="flex flex-col items-center text-center gap-4">
            <Avatar className="w-36 h-36 ring-4 ring-primary/30 shadow-xl">
              <AvatarImage src={profile} alt="User avatar" />
              <AvatarFallback className="text-3xl font-bold">AN</AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-3xl font-semibold text-foreground">Anurag</h2>
              <p className="text-muted-foreground">anurag@example.com</p>
            </div>
          </div>

          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl bg-muted/40 py-4">
              <p className="text-xl font-bold text-foreground">6</p>
              <p className="text-sm text-muted-foreground">Bookings</p>
            </div>
            <div className="rounded-2xl bg-muted/40 py-4">
              <p className="text-xl font-bold text-foreground">3</p>
              <p className="text-sm text-muted-foreground">Upcoming</p>
            </div>
            <div className="rounded-2xl bg-muted/40 py-4">
              <p className="text-xl font-bold text-foreground">2024</p>
              <p className="text-sm text-muted-foreground">Joined</p>
            </div>
          </div>

        
          <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Location</span>
              <span className="font-medium text-foreground">Jaipur, India</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Account Type</span>
              <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-sm font-medium">
                Premium
              </span>
            </div>
          </div>

          
          <button className="mt-10 w-full rounded-2xl bg-primary py-4 text-primary-foreground text-lg font-semibold hover:opacity-90 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
