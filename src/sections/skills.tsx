import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";

import cssIcon from "@/assets/icons/css.svg";
import DBeaverIcon from '@/assets/icons/dbeaver.svg';
import dockerIcon from "@/assets/icons/docker.svg";
import expressJSIcon from '@/assets/icons/ExpressJS.svg';
import flaskIcon from '@/assets/icons/Flask.svg';
import gitIcon from "@/assets/icons/git.svg";
import gitlabCIIcon from '@/assets/icons/gitlab.svg';
import html5Icon from "@/assets/icons/html5.svg";
import intelliJIcon from '@/assets/icons/intellij.svg';
import javaIcon from "@/assets/icons/java.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import macosIcon from "@/assets/icons/macos.svg";
import nodejsIcon from "@/assets/icons/nodejs.svg";
import phpIcon from '@/assets/icons/php.svg';
import postmanIcon from "@/assets/icons/postman.svg";
import postgresIcon from "@/assets/icons/postgres.svg";
import pythonIcon from "@/assets/icons/python.svg";
import reactIcon from "@/assets/icons/react.svg";
import springBootIcon from '@/assets/icons/springboot.svg';
import sqlServerIcon from '@/assets/icons/sqlserver.svg';
import typescriptIcon from "@/assets/icons/typescript.svg";
import vscodeIcon from "@/assets/icons/vscode.svg";
import windowsIcon from '@/assets/icons/windows.svg';

export default function skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "CSS",
          icon: cssIcon,
        }
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Java",
          icon: javaIcon,
        },
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "PHP",
          icon: phpIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
        {
          name: "SQLServer",
          icon: sqlServerIcon,
        }
      ],
    },
    {
      title: "Frameworks",
      skills: [
        {
          name: "Spring Boot",
          icon: springBootIcon,
        },
        {
          name: "Express.js",
          icon: expressJSIcon,
        },
        {
          name: "Flask",
          icon: flaskIcon,
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "Docker",
          icon: dockerIcon,
        },
        {
          name: "GitLab CI",
          icon: gitlabCIIcon,
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "macOS",
          icon: macosIcon,
        },
        {
          name: "Windows",
          icon: windowsIcon,
        },
        {
          name: "VS Code",
          icon: vscodeIcon,
        },
        {
          name: "IntelliJ IDEA",
          icon: intelliJIcon,
        },
        {
          name: "Postman",
          icon: postmanIcon,
        },
        {
          name: "DBeaver",
          icon: DBeaverIcon,
        },

      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
