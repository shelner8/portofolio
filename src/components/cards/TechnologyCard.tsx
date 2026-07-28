import * as React from "react"
import Link from "next/link"
import { BaseCard } from "./BaseCard"
import { Technology } from "@/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { 
  Network, Server, Share2, Route, Globe, Milestone, Box, GitMerge, 
  ShieldAlert, HardDrive, Copy, Link as LinkIcon, Cpu, Layers, GitCommit, 
  GitPullRequest, GitBranch, Maximize, Shield, Lock, Wifi, Code, Award, FolderGit2, FileText, ChevronRight
} from "lucide-react"

interface TechnologyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  technology: Technology
}

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'network': return <Network className="w-5 h-5 text-accent-blue" />
    case 'server': return <Server className="w-5 h-5 text-accent-blue" />
    case 'share-2': return <Share2 className="w-5 h-5 text-accent-blue" />
    case 'route': return <Route className="w-5 h-5 text-accent-blue" />
    case 'globe': return <Globe className="w-5 h-5 text-accent-blue" />
    case 'milestone': return <Milestone className="w-5 h-5 text-accent-blue" />
    case 'box': return <Box className="w-5 h-5 text-accent-blue" />
    case 'git-merge': return <GitMerge className="w-5 h-5 text-accent-blue" />
    case 'shield-alert': return <ShieldAlert className="w-5 h-5 text-accent-blue" />
    case 'hard-drive': return <HardDrive className="w-5 h-5 text-accent-blue" />
    case 'copy': return <Copy className="w-5 h-5 text-accent-blue" />
    case 'link': return <LinkIcon className="w-5 h-5 text-accent-blue" />
    case 'cpu': return <Cpu className="w-5 h-5 text-accent-blue" />
    case 'layers': return <Layers className="w-5 h-5 text-accent-blue" />
    case 'git-commit': return <GitCommit className="w-5 h-5 text-accent-blue" />
    case 'git-pull-request': return <GitPullRequest className="w-5 h-5 text-accent-blue" />
    case 'git-branch': return <GitBranch className="w-5 h-5 text-accent-blue" />
    case 'maximize': return <Maximize className="w-5 h-5 text-accent-blue" />
    case 'shield': return <Shield className="w-5 h-5 text-accent-blue" />
    case 'lock': return <Lock className="w-5 h-5 text-accent-blue" />
    case 'wifi': return <Wifi className="w-5 h-5 text-accent-blue" />
    case 'code': return <Code className="w-5 h-5 text-accent-blue" />
    default: return <Cpu className="w-5 h-5 text-accent-blue" />
  }
}

export function TechnologyCard({ technology, className, ...props }: TechnologyCardProps) {
  const projectCount = technology.relatedProjects?.length || 0;
  const articleCount = technology.relatedArticles?.length || 0;
  const certCount = technology.relatedCertifications?.length || 0;

  return (
    <Link href={`/technology/${technology.slug || technology.id}`} className="block h-full group outline-none">
      <BaseCard className={cn("p-6 md:p-8 h-full flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-blue/5", className)} hoverable {...props}>
        {/* Subtle hover glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

        <div className="flex justify-between items-start gap-4">
          <div className="p-3 rounded-xl bg-surface/80 border border-surface flex-shrink-0 group-hover:scale-110 group-hover:bg-accent-blue/10 transition-all duration-300 shadow-soft">
            {getIcon(technology.icon)}
          </div>
          <Badge variant="outline" className="border-surface-light text-muted bg-surface/50 font-medium">
            {technology.category}
          </Badge>
        </div>
        
        <div className="flex flex-col flex-1 gap-3">
          <h3 className="text-xl font-bold text-primary group-hover:text-accent-blue transition-colors duration-300">
            {technology.name}
          </h3>
          <p className="text-sm text-muted/90 leading-relaxed line-clamp-3">
            {technology.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-surface/60">
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-1 items-center justify-center p-2 rounded-lg bg-surface/30 border border-surface-light/50">
              <FolderGit2 className="w-4 h-4 text-accent-blue/70 mb-1" />
              <span className="text-lg font-bold text-primary leading-none">{projectCount}</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Projects</span>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center p-2 rounded-lg bg-surface/30 border border-surface-light/50">
              <FileText className="w-4 h-4 text-accent-orange/70 mb-1" />
              <span className="text-lg font-bold text-primary leading-none">{articleCount}</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Articles</span>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center p-2 rounded-lg bg-surface/30 border border-surface-light/50">
              <Award className="w-4 h-4 text-accent-emerald/70 mb-1" />
              <span className="text-lg font-bold text-primary leading-none">{certCount}</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Certs</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-surface/30">
            <span className="text-xs font-medium text-accent-blue group-hover:text-accent-blue/80 transition-colors">Explore Technology</span>
            <ChevronRight className="w-4 h-4 text-accent-blue transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </BaseCard>
    </Link>
  )
}
