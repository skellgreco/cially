import { MessageCircle, UsersRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import BottomCard from "./_main-components/bottom-card";
import { Activity } from "lucide-react";

export default function GeneralMessageDataCard({ chartData }) {

	let ArrayChartData = Array(chartData)[0];
	console.log(ArrayChartData)

	return (
		<>
			<Card className="mt-10 grid  auto-rows-auto px-10 sm:min-w-dvh">
				<div>
					<div className="text-xl font-semibold"><Activity className="inline mr-2"/>General Data</div>
					<div className="font-sans text-sm mt-1 text-white/60">More insights regarding the messages and their content</div>
				</div>
				<div className="grid grid-cols-2 gap-x-3">
					<div className="">
						<div>Messages:  <p className="inline text-white/80 font-sans">{ArrayChartData[0].total_messages}</p></div>
						<div>Media Sent:  <p className="inline text-white/80 font-sans">{ArrayChartData[0].total_attachments}</p></div>

					</div>
					<div>
						<div>Message Deletions:  <p className="inline text-white/80 font-sans">{ArrayChartData[0].message_deletions}</p></div>
						<div>Message Edits:  <p className="inline text-white/80 font-sans">{ArrayChartData[0].message_edits}</p></div>
					</div>
				</div>


			</Card>
		</>
	);
}
