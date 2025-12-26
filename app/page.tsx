import Image from 'next/image';

import logo from '@/public/assets/imgs/icon.png'

import job_data from '@/public/assets/content/jobs.json'
import projects_data from '@/public/assets/content/projects.json'

export default function Home() {
  return (
    <div>
      <div className='flex flex-col'>
        <Image src={logo} className='w-32 rounded-2xl' alt='logo'/>
        <h1 className='text-3xl font-bold underline'>Iago Fragnan</h1>
        <h2>Fullstack Developer</h2>
        <h3>Currently working @ <a href='https://penseavanti.com.br' className='font-bold text-blue-700 underline'>AVANTI</a></h3>
        <div>
          <ul>
            {job_data.map((job, index) => (
              <li key={index} className='mb-4'>
                <h5 className='font-bold'>{job.company}</h5>
                <h5>{job.role}</h5>
                <p className='italic'>{job.start_date} - {job.end_date ? job.end_date : 'Present'}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-2xl font-bold underline mt-8 mb-4'>Projects</h2>
          <ul>
            {projects_data.map((project, index) => (
              <li key={index} className='mb-4'>
                <h5 className='font-bold'>{project.name}</h5>
                <p>{project.description}</p>
                <a href={project.url} className='text-blue-700 underline'>Reposiorio</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
